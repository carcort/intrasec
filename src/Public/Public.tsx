import { Routes, Route } from "react-router";
import Home from "./Home/Home";
import Faq from "./Faq/Faq";
import Documentacion from "./Documentacion/Documentacion";
import LayoutPublic from "./LayoutPublic";

const Public = () => {
  return (
      <Routes>
          <Route path="/*" element={<LayoutPublic />}>
            <Route index element={<Home />} />
            <Route path="doc" element={<Documentacion />} />
            <Route path="faq" element={<Faq />} />
          </Route>
       </Routes>
  )
}

export default Public