window.addEventListener('load', function(event) {
	if (window.parent) {
		window.parent.postMessage('loaded', '*');
	}
});

window.addEventListener('message', function(event) {
	if (
		!/^(chrome|safari)-extension:/.test(event.origin) &&
    ["https://mail.google.com", "https://inbox.google.com"].indexOf(event.origin) < 0
	) {
		return;
	}

	try {
		switch(event.data.type) {
      case 'show': {
        Calendly.initPopupWidget({
          url: 'https://calendly.com/streak-pipeline-review/streak-pipeline-review-cl'
         });
        break;
      }
		}

	} catch(e) {
		event.source.postMessage({type: 'error', originalMessageType: event.data.type, errorMessage: e.message}, event.origin);
	}
});

/*
Calendly doesn't fire an event when the pop-up closes,
so instead we just set up a mutation observer that
can post the 'hide' event when the overlay closes.
*/
document.addEventListener('DOMContentLoaded', function() {
  const intercomNodeObserver = new MutationObserver(mutationsList => {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];

      if (mutation.type === 'childList') {
        if (!document.querySelector('.calendly-overlay')) {
          console.log('mutation observer found no overlay element');
          window.parent.postMessage('hide', '*');
        }
      }
    }
  });

  intercomNodeObserver.observe(document, {
    childList: true,
    subtree: true
  });
});
