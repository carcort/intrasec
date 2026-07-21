
import { Navigate } from "react-router";


const PivoteSanitaria = ({usuario}) => {

 const {estaAutenticado, area} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Sanitaria'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/misClientes'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteSanitaria