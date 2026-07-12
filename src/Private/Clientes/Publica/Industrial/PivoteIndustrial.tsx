


import { Navigate } from "react-router";


const PivoteIndustrial = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Consultor'){
    return <Navigate to={'/private/clientes/publica/industrial/consultor'} replace />;
  }
  else if(cargo === 'Gestor'){
    return <Navigate to={'/private/clientes/publica/industrial/gestor'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteIndustrial