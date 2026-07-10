

import { Navigate } from "react-router";


const PivoteRrhh = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, gerencia} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Gerente_Rrhh'){
    return <Navigate to={'/private/rrhh/gerente'} replace />;
  }
  else if(cargo === 'Administrador_Rrhh'){
    return <Navigate to={'/private/rrhh/administrador'} replace />;
  }

  else if(cargo === 'Reclutador'){
    return <Navigate to={'/private/rrhh/reclutador'} replace />;
  }

  else if(cargo === 'Generalista'){
    return <Navigate to={'/private/rrhh/generalista'} replace />;
  }
  
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteRrhh