


import { Navigate } from "react-router";


const PivoteTransporte = ({usuario}) => {

 const {estaAutenticado, area} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Transporte'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/misClientes'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteTransporte