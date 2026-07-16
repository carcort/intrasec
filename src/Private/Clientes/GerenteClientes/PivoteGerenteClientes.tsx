


import { Navigate } from "react-router";


const PivoteGerenteClientes = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, gerencia} = usuario

 console.log(tipo_empresa);
 


  if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  // if(gerencia === 'Clientes' && cargo === 'GerenteClientes'){
  //   return <Navigate to={'/private/clientes/gerenteClientes'} replace />;
  // }

  // if(gerencia === 'Clientes' && cargo === 'TeamLeader'){
  //   return <Navigate to={'/private/clientes/teamLeader'} replace />;
  // }


  if(cargo === 'GerenteClientes'){
    return <Navigate to={'/private/clientes/gerenteClientes/home'} replace />;
  }
  // else if(tipo_empresa === 'Publica'){
  //   return <Navigate to={'/private/clientes/publica'} replace />;
  // }

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

export default PivoteGerenteClientes