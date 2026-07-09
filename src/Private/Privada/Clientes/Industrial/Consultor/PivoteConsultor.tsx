
import { Navigate } from "react-router";


const PivoteConsultor = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, area} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Energia'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/energia'} replace />;
  }
  else if(area === 'Sanitaria'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/sanitaria'} replace />;
  }
   else if(area === 'Telecomunicaciones'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/Telecomunicaciones'} replace />;
  }
   else if(area === 'Transporte'){
    return <Navigate to={'/private/clientes/privada/industrial/consultor/transporte'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteConsultor