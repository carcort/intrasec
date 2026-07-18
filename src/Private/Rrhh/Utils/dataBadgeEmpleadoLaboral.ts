import { dataModalEmpleadoCargo } from "../../../Components/Utils/dataModalEmpleadoCargo";
import { dataModalEmpleadoLaboralEquipo } from "../../../Components/Utils/dataModalEmpleadoEquipo";
import { dataModalEmpleadoLaboralGerencia } from "../../../Components/Utils/dataModalEmpleadoGerencia";
import { dataModalEmpleadoLaboralAfp } from "../../../Components/Utils/dataModalEmpleadoLaboralAfp";
import { dataModalEmpleadoLaboralIsapre } from "../../../Components/Utils/dataModalEmpleadoLaboralIsapre";
import { dataModalEmpleadoLaboralTrabajo } from "../../../Components/Utils/dataModalEmpleadoTrabajo";


export const dataBadgeEmpleadoLaboral = [
   {
      id: '1',
      titulo: 'Email Corporativo *',
      placeHolder: 'maria_poblete@intrasec.com',
      data: []
     
   },
   {
      id: '2',
      titulo: 'Gerencia *',
      placeHolder: 'Clientes, Finanzas, Etc.',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
      data: dataModalEmpleadoLaboralGerencia
        
   },
   
   {
      id: '3',
      titulo: 'Telefono 1 Corporativo *',
      placeHolder: '+569XXXXXXXX',
      data: []
   },
   {
      id: '4',
      titulo: 'Gerente Encargado',
      placeHolder: 'Jorge Lopez',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
      data: []
   },
   
   {
      id: '5',
      titulo: 'Telefono 2 Corporativo (Opcional)',
      placeHolder: '+569XXXXXXXX',
      data: []
   },
   {
      id: '6',
      titulo: 'Cargo *',
      placeHolder: 'Gestor, Consultor, Gestor Legal...',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/react.png',
      data: dataModalEmpleadoCargo
   },
   

   {
      id: '7',
      titulo: 'AFP *',
      placeHolder: 'Habitat, Cuprum, Etc.',
      data: dataModalEmpleadoLaboralAfp
   },
   {
      id: '8',
      titulo: 'Supervisor Directo',
      placeHolder: 'Pedro Rivas',
      data: []
   },
   {
      id: '9',
      titulo: 'Isapre / Fonasa *',
      placeHolder: 'Cruz Blanca, Fonasa, Banmedica, Etc.',
      data: dataModalEmpleadoLaboralIsapre
   },
   
   
      
   {
      id: '10',
      titulo: 'Equipo al que va a Pertenecer',
      placeHolder: 'Team 1',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
      data:    dataModalEmpleadoLaboralEquipo
   },
   
   {
      id: '11',
      titulo: 'Fecha Legal de inicio del Contrato del Empleado *',
      placeHolder: '19-08-2026',
      data: []
   },
   {
      id: '12',
      titulo: 'Forma de Trabajo establecida *',
      placeHolder: 'Presencial / Mixto / Virtual',
      data: dataModalEmpleadoLaboralTrabajo
   }

]