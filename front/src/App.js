import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import Create from "./pages/Create";
import HomeCars from "./pages/HomeCars";
import HomeMotos from "./pages/HomeMotos";
import HomeAutreV from "./pages/HomeAutreV";
import Detail from "./pages/Detail";
import DetailMoto from "./pages/DetailMoto";
import DetailAutre from "./pages/DetailAutre";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeCars />} />
        <Route path="/homeMotos" element={<HomeMotos />} />
        <Route path="/homeAutreV" element={<HomeAutreV />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detailMoto/:id" element={<DetailMoto />} />{" "}
        <Route path="/detailAutre/:id" element={<DetailAutre />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
