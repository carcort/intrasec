
import Navbar from "../Components/Navbar"
import { dataNavbarPrivate } from "../Components/Utils/dataNavbarPrivate"
import { Navigate, Outlet } from "react-router";
import { dataCabeceraFiltros } from "./Utils/dataCabeceraFiltros";
import Sidebar from "../Components/Sidebar";
import { dataSidebarIndustrial } from "../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial";

const LayoutPrivate = ({usuario}) => {

  //const [dataNavbar, setDataNavbar] = useState([{}])

  const {primer_nombre, estaAutenticado, gerencia} = usuario


 const entorno = 'privado'

 const handleClickNavbarPrivate =()=>{
  console.log('entorno privado');
  
 }


 console.log(`${primer_nombre} desde el layout privadooo`);


//   const dataNavbarClientes = [
//     {
//       id: '1',
//       nombre: 'Home',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
//       ruta: '/'
//     },
//     {
//       id: '2',
//       nombre: '2CLIENTES',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
//       ruta: '/'
//     },
//     {
//       id: '3',
//       nombre: '3CLIENTES',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
//       ruta: '/'
//     },
//     {
//       id: '4',
//       nombre: '4CLIENTES',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
//       ruta: '/'
//     },
//     {
//       id: '5',
//       nombre: '5CLIENTES',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cerrar.png',
//       ruta: '/'
//     },

//  ]


//  const dataNavbarDirectiva = [
//     {
//       id: '1',
//       nombre: 'Home',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
//       ruta: '/'
//     },
//     {
//       id: '2',
//       nombre: 'Clientes',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
//       ruta: '/'
//     },
//     {
//       id: '3',
//       nombre: 'Finanzas',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
//       ruta: '/'
//     },
//     {
//       id: '4',
//       nombre: 'Rrhh',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
//       ruta: '/'
//     },
//     {
//       id: '5',
//       nombre: 'Tecnico',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cerrar.png',
//       ruta: '/'
//     },

//  ]



//   const dataNavbarFinanzas = [
//     {
//       id: '1',
//       nombre: 'Home',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
//       ruta: '/'
//     },
//     {
//       id: '2',
//       nombre: '2finanzas',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
//       ruta: '/'
//     },
//     {
//       id: '3',
//       nombre: '3finanzas',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
//       ruta: '/'
//     },
//     {
//       id: '4',
//       nombre: '4finanzas',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
//       ruta: '/'
//     },
//     {
//       id: '5',
//       nombre: '5finanzas',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cerrar.png',
//       ruta: '/'
//     },

//  ]



//    const dataNavbarRrhh = [
//     {
//       id: '1',
//       nombre: 'Home',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
//       ruta: '/'
//     },
//     {
//       id: '2',
//       nombre: '2rrhh',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
//       ruta: '/'
//     },
//     {
//       id: '3',
//       nombre: '3rrhh',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
//       ruta: '/'
//     },
//     {
//       id: '4',
//       nombre: '4rrhh',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
//       ruta: '/'
//     },
//     {
//       id: '5',
//       nombre: '5rrhh',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cerrar.png',
//       ruta: '/'
//     },

//  ]



//   const dataNavbarTecnico = [
//     {
//       id: '1',
//       nombre: 'Home',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png',
//       ruta: '/'
//     },
//     {
//       id: '2',
//       nombre: '2tecnico',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
//       ruta: '/'
//     },
//     {
//       id: '3',
//       nombre: '3tecnico',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png',
//       ruta: '/'
//     },
//     {
//       id: '4',
//       nombre: '4tecnico',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png',
//       ruta: '/'
//     },
//     {
//       id: '5',
//       nombre: '5tecnico',
//       icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cerrar.png',
//       ruta: '/'
//     },

//  ]

    //let dataaa = [{}]

    // if(gerencia === 'Clientes'){
    //     return setDataNavbar(dataNavbarClientes)
    // }
    // else if(gerencia === 'Directiva'){
    //     return setDataNavbar(dataNavbarDirectiva)
    // }
    // else if(gerencia === 'Finanzas'){
    //      return setDataNavbar(dataNavbarFinanzas)
    // }
    // else if(gerencia === 'Rrhh'){
    //    return setDataNavbar(dataNavbarRrhh)
    // }
    // else if(gerencia === 'Tecnico'){
    //     return setDataNavbar(dataNavbarTecnico)
    // }
    // else {
    //   console.log('as');
    // }
//  const logicaNavbar =()=>{
    
//  }

//  logicaNavbar()
 
 
  return (
    estaAutenticado ? 
    <div className="w-screen h-screen ">
       <nav className="w-full h-[5%] bg-violet-500 flex justify-end">
            <Navbar
              data={dataNavbarPrivate}  
              handleClickNavbar={handleClickNavbarPrivate}
              entorno={entorno}
              gerencia={gerencia}
              

            />
            
       </nav>
       <section className="w-full h-[7%] px-3"> 
            <article className="flex h-full justify-between">
              <div className="flex w-[11%] h-full  items-center">
                <button className="bg-violet-500 text-white w-[36%] h-[50%] hover:bg-violet-600 cursor-pointer rounded font-semibold">
                  Nuevo
                </button>
                <div className="  w-[50%] h-[60%] grid place-items-center">
                  Empleados
                </div>
                <button className=" text-white w-[14%] h-[60%] grid place-items-center cursor-pointer ">
                  <img className="w-4 h-4" src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png'} alt="" />
                </button>
              </div>

              <div className="w-[67%] h-full grid place-items-center">
                  <input className="border border-gray-200 w-[50%] h-[50%] " type="text" />
              </div>        

              <div className="w-[13%] h-full  flex">
                {dataCabeceraFiltros.map((el)=>{
                  return <button className="w-[20%] grid place-items-center cursor-pointer">
                    <img className="w-5 h-5" src={el.icono} alt="sdds" />
                  </button>
                })}
              </div>
            </article>
            
       </section>

       {/* ACA VA TODO LO QUE VA A CAMBIAR */}
       <main className="w-full h-[88%] flex">
        <aside className="w-[3%] h-full"> 
            <Sidebar
                data= {dataSidebarIndustrial} 
            />
         </aside>
         <Outlet />
       </main>



       
    
    </div>:  <Navigate to={'/login'} replace />
  )
}

export default LayoutPrivate