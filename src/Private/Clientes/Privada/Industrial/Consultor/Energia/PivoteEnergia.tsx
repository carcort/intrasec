import { Navigate } from "react-router";


const PivoteEnergia = ({usuario}) => {

 const {estaAutenticado, area} = usuario


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Energia'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/misClientes'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteEnergia