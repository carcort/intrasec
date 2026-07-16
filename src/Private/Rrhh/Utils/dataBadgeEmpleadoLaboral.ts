import { dataModalEmpleadoLaboralIsapre } from "../../../Components/Utils/dataModalEmpleadoLaboralIsapre";


export const dataBadgeEmpleadoLaboral = [
   {
      id: '1',
      titulo: 'Email Corporativo *',
      placeHolder: 'maria_poblete@intrasec.com',
      data: []
     
   },
   {
      id: '2',
      titulo: 'Telefono 1 Corporativo *',
      placeHolder: '+569XXXXXXXX',
      data: []
   },
   {
      id: '3',
      titulo: 'Telefono 2 Corporativo (Opcional)',
      placeHolder: '+569XXXXXXXX',
      data: []
   },
   {
      id: '4',
      titulo: 'Telefono Contacto de Emergencia (Opcional)',
      placeHolder: '+569XXXXXXX',
      data: []
   },

   {
      id: '5',
      titulo: 'AFP *',
      placeHolder: 'Habitat, Cuprum, Etc.',
      data: dataModalEmpleadoLaboralIsapre
   },
   {
      id: '6',
      titulo: 'Isapre / Fonasa *',
      placeHolder: 'Cruz Blanca, Fonasa, Banmedica, Etc.',
      data: dataModalEmpleadoLaboralIsapre
   }

]