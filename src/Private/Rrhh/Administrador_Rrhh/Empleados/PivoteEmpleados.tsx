
import { Navigate } from "react-router";


const PivoteEmpleados = ({usuario}) => {

 const {estaAutenticado, division, cargo} = usuario

 console.log(division, estaAutenticado);
 


 if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(cargo === 'Administrador_Rrhh'){
    return <Navigate to={'/private/rrhh/administrador/empleados/nuevoEmpleado/laboral'} replace />;
  }
 
  
  else {
    return <Navigate to={'/'} replace />;
  }
 
  return (
    <div>Pivote</div>
  )
}

export default PivoteEmpleados