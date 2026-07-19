import { Navigate } from "react-router";


const Pivote = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, gerencia} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(gerencia === 'Directiva'){
    return <Navigate to={'/private/directiva'} replace />;
  }
  else if(gerencia === 'Clientes'){
    return <Navigate to={'/private/clientes'} replace />;
  }
  else if(gerencia === 'Rrhh'){
    return <Navigate to={'/private/rrhh'} replace />;
  }
  else if(gerencia === 'Comercial'){
    return <Navigate to={'/private/comercial'} replace />;
  }
  else if(gerencia === 'Legal'){
    return <Navigate to={'/private/legal'} replace />;
  }
  else if(gerencia === 'Tecnico'){
    return <Navigate to={'/private/tecnico'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default Pivote