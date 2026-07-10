import { Route, Routes } from "react-router"
import LayoutDirectiva from "./LayoutDirectiva"
import PivoteDirectiva from "./PivoteDirectiva"

import Ceo_Adjunto from "./Ceo_Adjunto/Ceo_Adjunto"
import Ceo from "./Ceo/Ceo"


const Directiva = ({usuario}) => {
  return (
    <Routes>
          <Route path="/*" element={<LayoutDirectiva />}>
            <Route index element={<PivoteDirectiva usuario={usuario } />} />
            <Route path="ceo/*" element={<Ceo usuario={usuario } />} />
            <Route path="ceo_adjunto/*" element={<Ceo_Adjunto usuario={usuario } />} />
          </Route>
       </Routes>
  )
}

export default Directiva