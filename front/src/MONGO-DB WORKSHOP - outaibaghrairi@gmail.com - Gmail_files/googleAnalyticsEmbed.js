let CURRENT_USER_KEY = '';

function getCookie(key) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const [k, v] = cookies[i].trim().split('=');
    if (k === key) {
      return v;
    }
  }
}

window.addEventListener('load', function (event) {
  if (window.parent) {
    window.parent.postMessage('loaded', '*');
  }
});


window.addEventListener('message', function (event) {
  if (
    !/^(chrome|safari)-extension:/.test(event.origin) &&
    ["https://mail.google.com", "https://inbox.google.com"].indexOf(event.origin) < 0
  ) {
    return;
  }

  // If there exists a gaClientId set by streak.com, insert it,
  // else, create a new one since this is the first time we have seen
  // this user/browser
  const options = {};
  const gaClientId = getCookie('gaClientId');
  if (gaClientId) {
    options['clientId'] = gaClientId
  }

  function setStreakClientIdCookie() {
    ga(function (tracker) {
      var clientId = tracker.get('clientId');
      var date = new Date();
      setCookie('gaClientId', clientId, {
        secure: true,
        expires: new Date(date.setTime(date.getTime() + (365*24*60*60*1000))),
        domain: 'streak.com',
        firstPartyDomain: 'streak.com',
        samesite: 'none',
      });
    });
  }


  try {
    switch (event.data.type) {
      case 'configure':
        // it is okay if options is empty here, GA will create a new clientId
        ga('create', event.data.propertyId, 'auto', options);
        setStreakClientIdCookie();
        ga('send', 'pageview');
        CURRENT_USER_KEY = event.data.userKey;

        // https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id#getting_the_client_id_from_the_cookie
        ga((tracker) => {
          event.source.postMessage({
            type: 'configureComplete',
            clientId: tracker.get('clientId')
          }, event.origin);
        });
        break;

      case 'getCookie':
        event.source.postMessage({
          cookie: getCookie(event.data.key),
          type: 'getCookie'
        },
          event.origin
        );
        break;

      case 'event':
        ga('send', {
          hitType: 'event',
          eventCategory: 'Extension',
          eventAction: event.data.eventAction,
          eventLabel: CURRENT_USER_KEY
        });
        break;
    }

  } catch (e) {
    event.source.postMessage({ type: 'error', originalMessageType: event.data.type, errorMessage: e.message }, event.origin);
  }
});
