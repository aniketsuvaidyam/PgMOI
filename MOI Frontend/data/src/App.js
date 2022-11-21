import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Component/Protected/Protected";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import State from "./Component/Master Table/State";
import District from "./Component/Master Table/District";
import Block from "./Component/Master Table/Block";
import Village from "./Component/Master Table/Village";
import Register from "./Component/Register/Register";
import Beneficiry from "./Component/Beneficiry/Beneficiry";
import Benficiirydata from "./Component/Beneficiry/Benficiirydata";
import Statelist from "./Component/Master Table/Statelist";
import Districtlist from "./Component/Master Table/Districtlist";
import Blocklist from "./Component/Master Table/Blocklist";
import Villagelist from "./Component/Master Table/Villagelist";
import Userdata from "./Component/User/Userdata";
function App() {
  let to = sessionStorage.getItem("paylode");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route
            path="/register"
            element={<Protected Component={Register} />}
          />
          <Route path="/user" element={<Protected Component={Userdata} />} />
          <Route path="/state" element={<Protected Component={State} />} />
          <Route
            path="/district"
            element={<Protected Component={District} />}
          />
          <Route path="/block" element={<Protected Component={Block} />} />
          <Route path="/village" element={<Protected Component={Village} />} />
          <Route
            path="/beneficiry"
            element={<Protected Component={Beneficiry} />}
          />
          <Route
            path="/state/list"
            element={<Protected Component={Statelist} />}
          />
          <Route
            path="/district/list"
            element={<Protected Component={Districtlist} />}
          />
          <Route
            path="/block/list"
            element={<Protected Component={Blocklist} />}
          />
          <Route
            path="/village/list"
            element={<Protected Component={Villagelist} />}
          />
          <Route
            path="/beneficirydata"
            element={<Protected Component={Benficiirydata} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
