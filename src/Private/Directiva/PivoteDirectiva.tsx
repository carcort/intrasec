



import { Navigate } from "react-router";


const PivoteDirectiva= ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, gerencia} = usuario

 //console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Ceo'){
    return <Navigate to={'/private/directiva/ceo'} replace />;
  }
  else if(cargo === 'Ceo_Adjunto'){
    return <Navigate to={'/private/directiva/ceo_adjunto'} replace />;
  }

  
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteDirectiva