import { Routes, Route } from "react-router";
import Home from "./Home/Home";
import Faq from "./Faq/Faq";
import Documentacion from "./Documentacion/Documentacion";
import LayoutPublic from "./LayoutPublic";
import Login from "../Autenticacion/Login/Login";


const Public = () => {
  return (
      <Routes>
          <Route path="/*" element={<LayoutPublic />}>
            <Route index element={<Home />} />
            <Route path="doc" element={<Documentacion />} />
            <Route path="faq" element={<Faq />} />


            <Route path="login/*" element={<Login />} />
          </Route>
       </Routes>
  )
}

export default Public