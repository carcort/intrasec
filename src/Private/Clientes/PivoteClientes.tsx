
import { Navigate } from "react-router";


const PivoteClientes = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, gerencia} = usuario

 console.log(tipo_empresa);
 


  if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(gerencia === 'Clientes' && cargo === 'GerenteClientes'){
    return <Navigate to={'/private/clientes/gerenteClientes'} replace />;
  }


  if(tipo_empresa === 'Privada'){
    return <Navigate to={'/private/clientes/privada'} replace />;
  }
  else if(tipo_empresa === 'Publica'){
    return <Navigate to={'/private/clientes/publica'} replace />;
  }

  // else if(gerencia === 'Clientes' && cargo === 'GerenteClientes'){
  //   return <Navigate to={'/private/clientes/gerenteClientes'} replace />;
  // }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteClientes