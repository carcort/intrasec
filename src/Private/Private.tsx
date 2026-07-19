import { Routes, Route } from "react-router";
import LayoutPrivate from "./LayoutPrivate";
import Clientes from "./Clientes/Clientes";
import Pivote from "./Pivote";
import Rrhh from "./Rrhh/Rrhh";
import Directiva from "./Directiva/Directiva";

import Perfil from "./Perfil/Perfil";
import Comercial from "./Comercial/Comercial";
import Legal from "./Legal/Legal";
import Tecnico from "./Tecnico/Tecnico";

const Private = () => {


  const usuario = {
    id: '1',
    icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
    estaAutenticado:true,
    primer_nombre: 'Romina',
    apellido_paterno: 'Dinamarca',
    apellido_materno: 'Barraza',
    telefono_laboral: '+5698664642',
    email_laboral: 'juan_perez@intrasec.com',
    telefono_personal: '+5697562222',
    email_personal: 'juenitoxxxx@gmail.com',
    gerencia: 'Comercial',
    tipo_empresa: 'Privada',
    division: 'Industrial',
    cargo: 'Gerente_Comercial',
    //cargo: 'GerenteClientes',
    area: 'Energia',
    sub_area: '',
  }


  


  return (
      <Routes>
          <Route path="/*" element={<LayoutPrivate usuario={usuario} />}>
            <Route index element={<Pivote usuario={usuario } />} />
            <Route path="directiva/*" element={<Directiva usuario={usuario } />} />
            <Route path="clientes/*" element={<Clientes usuario={usuario } />} />
            <Route path="comercial/*" element={<Comercial usuario={usuario } />} />
            <Route path="rrhh/*" element={<Rrhh usuario={usuario } />} />
            <Route path="legal/*" element={<Legal usuario={usuario } />} />
            <Route path="tecnico/*" element={<Tecnico usuario={usuario } />} />



            <Route path="perfil/*" element={<Perfil usuario={usuario } />} />


            
          </Route>
       </Routes>
  )
}

export default Private