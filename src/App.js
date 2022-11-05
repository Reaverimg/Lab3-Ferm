import "./App.css";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import NavBar from "./components/Navigation";
import Contact from "./components/Contact";
import Add from "./components/Add";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import FetchAPI from "./components/FetchAPI";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
function App() {
  const [user, setUser] = useState({});
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    document.getElementById("buttonDiv").hidden = true;
  };
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById("buttonDiv").hidden = false;
  };
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "398315262197-1leptul4o9896dr19vm5aamsc5u8lrqf.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, []);

  return (
    <div className="container-fluid">
      <div id="buttonDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={handleLogOut}>logout</button>
      )}
      {user && (
        <div>
          <h5>{user.name}</h5>
        </div>
      )}

      <NavBar></NavBar>

      {/* <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      {/* 
      <div className="grid grid-flow-row-dense grid-cols-3">
        <div>
          <AddUsers></AddUsers>
        </div>
        <div className="col-span-2">
          <Users></Users>
        </div>
      </div> */}

      <Routes>
        <Route path="/contact" element={<AddUsers></AddUsers>}></Route>
        <Route path="/fetch" element={<FetchAPI></FetchAPI>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
