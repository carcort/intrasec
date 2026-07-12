



import { Navigate } from "react-router";


const PivoteGestor = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, gerencia} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Gestor'){
    return <Navigate to={'/private/clientes/privada/comercial/gestor/contactos'} replace />;
  }
  // else if(cargo === 'Gestor'){
  //   return <Navigate to={'/private/clientes/privada/industrial/gestor'} replace />;
  // }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteGestor