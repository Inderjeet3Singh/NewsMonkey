import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Link from "./Component/Link";
import Action from "./Component/Action";
import EditProfiles from "./Component/EditProfiles";
import Suggestions from "./Component/Suggestions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="/link" element={<Link />}></Route>
            <Route path="/action" element={<Action />}></Route>
            <Route path="/editProfiles" element={<EditProfiles />}></Route>
            <Route path="/suggestions" element={<Suggestions />}></Route>

          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
