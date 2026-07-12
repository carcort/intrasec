

import { Navigate } from "react-router";


const PivotePublica = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, gerencia} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(division === 'Industrial'){
    return <Navigate to={'/private/clientes/publica/industrial'} replace />;
  }
  else if(division === 'Comercial'){
    return <Navigate to={'/private/clientes/publica/comercial'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivotePublica