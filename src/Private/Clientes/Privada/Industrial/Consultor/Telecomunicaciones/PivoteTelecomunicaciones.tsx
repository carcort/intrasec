import { Navigate } from "react-router";


const PivoteTelecomunicaciones = ({usuario}) => {

 const {estaAutenticado, area} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Telecomunicaciones'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/misClientes'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteTelecomunicaciones