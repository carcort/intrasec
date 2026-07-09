import { Navigate } from "react-router";


const Pivote = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, gerencia} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(gerencia === 'Clientes'){
    return <Navigate to={'/private/clientes'} replace />;
  }
  else if(gerencia === 'Finanzas'){
    return <Navigate to={'/private/finanzas'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default Pivote