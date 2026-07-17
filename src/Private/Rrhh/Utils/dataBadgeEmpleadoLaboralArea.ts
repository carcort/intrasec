import { dataModalEmpleadoCargo } from "../../../Components/Utils/dataModalEmpleadoCargo";
import { dataModalEmpleadoLaboralGerencia } from "../../../Components/Utils/dataModalEmpleadoGerencia";
import { dataModalEmpleadoLaboralIsapre } from "../../../Components/Utils/dataModalEmpleadoLaboralIsapre";




export const dataBadgeEmpleadoLaboralArea = [
   {
      id: '7',
      titulo: 'Gerencia *',
      placeHolder: 'Clientes, Finanzas, Etc.',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
      data: dataModalEmpleadoLaboralGerencia
     
   },
   {
      id: '8',
      titulo: 'Gerente Encargado',
      placeHolder: 'Jorge Lopez...',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
      data: []
   },
   {
      id: '9',
      titulo: 'Cargo *',
      placeHolder: 'Gestor, Consultor, Gestor Legal...',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/react.png',
      data: dataModalEmpleadoCargo
   },
   {
      id: '10',
      titulo: 'Equipo al que va a Pertenecer',
      placeHolder: 'Team 1',
      icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
      data: dataModalEmpleadoLaboralIsapre
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
      data: dataModalEmpleadoLaboralIsapre
   }

]