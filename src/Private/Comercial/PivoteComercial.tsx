import { Navigate } from "react-router";


const PivoteComercial = ({usuario}) => {

 const {estaAutenticado,division, cargo} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Gerente_Comercial'){
    return <Navigate to={'/private/comercial/gerente'} replace />;
  }
  else if(cargo === 'Supervisor_Finanzas'){
    return <Navigate to={'/private/comercial/supervisorFinanzas'} replace />;
  }

  else if(cargo === 'Supervisor_Marketing'){
    return <Navigate to={'/private/comercial/supervisorMarketing'} replace />;
  }

  else if(cargo === 'Supervisor_Comunicaciones'){
    return <Navigate to={'/private/comercial/supervisorComunicaciones'} replace />;
  }
  
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteComercial