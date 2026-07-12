
import { Navigate } from "react-router";


const PivoteConsultorComercial = ({usuario}) => {

 const {estaAutenticado,tipo_empresa, division, cargo, area} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(area === 'Salud'){
    return <Navigate to={'/private/clientes/publica/comercial/consultor/salud'} replace />;
  }
  else if(area === 'Banca'){
    return <Navigate to={'/private/clientes/publica/comercial/consultor/banca'} replace />;
  }
   else if(area === 'Ecommerce'){
    return <Navigate to={'/private/clientes/publica/comercial/consultor/ecommerce'} replace />;
  }
   else if(area === 'Retail'){
    return <Navigate to={'/private/clientes/publica/comercial/consultor/retail'} replace />;
  }
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteConsultorComercial