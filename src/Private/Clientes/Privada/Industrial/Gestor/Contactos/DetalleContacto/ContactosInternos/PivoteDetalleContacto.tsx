

import { Navigate } from "react-router";


const PivoteDetalleContacto = ({usuario}) => {

 const {estaAutenticado, area, gerencia} = usuario

 //console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(gerencia === 'Clientes'){
    return <Navigate to={'/private/clientes/privada/industrial/gestor/contactos/detalleContacto/contactosInternos'} replace />;
  }
  // else if(area === 'Sanitaria'){
  //   return <Navigate to={'/private/clientes/privada/industrial/consultor/sanitaria'} replace />;
  // }
  //  else if(area === 'Telecomunicaciones'){
  //   return <Navigate to={'/private/clientes/privada/industrial/consultor/Telecomunicaciones'} replace />;
  // }
  //  else if(area === 'Transporte'){
  //   return <Navigate to={'/private/clientes/privada/industrial/consultor/transporte'} replace />;
  // }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteDetalleContacto