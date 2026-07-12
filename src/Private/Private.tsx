import { Routes, Route } from "react-router";
import LayoutPrivate from "./LayoutPrivate";
import Clientes from "./Clientes/Clientes";
import Finanzas from "./Finanzas/Finanzas";
import Pivote from "./Pivote";
import Rrhh from "./Rrhh/Rrhh";
import Directiva from "./Directiva/Directiva";

import Perfil from "./Perfil/Perfil";



const Private = () => {

  

  const usuario = {
    id: '1',
    icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
    estaAutenticado:true,
    primer_nombre: 'Juan',
    apellido_paterno: 'Perez',
    apellido_materno: 'Lopez',
    telefono_laboral: '+5698664642',
    email_laboral: 'juan_perez@intrasec.com',
    telefono_personal: '+5697562222',
    email_personal: 'juenitoxxxx@gmail.com',
    gerencia: 'Clientes',
    tipo_empresa: 'Publica',
    division: 'Comercial',
    //cargo: 'Administrador_Rrhh',
    cargo: 'Consultor',
    area: 'Salud',
    sub_area: '',
  }


  


  return (
      <Routes>
          <Route path="/*" element={<LayoutPrivate usuario={usuario} />}>
            <Route index element={<Pivote usuario={usuario } />} />
            <Route path="directiva/*" element={<Directiva usuario={usuario } />} />
            <Route path="clientes/*" element={<Clientes usuario={usuario } />} />
            <Route path="finanzas/*" element={<Finanzas usuario={usuario } />} />
            <Route path="rrhh/*" element={<Rrhh usuario={usuario } />} />





            <Route path="perfil/*" element={<Perfil usuario={usuario } />} />


            
          </Route>
       </Routes>
  )
}

export default Private