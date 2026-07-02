import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
import { dataNavbarPrivate } from "../Components/Utils/dataNavbarPrivate"
import { dataSidebarIndustrial } from "../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial"
//import { useNavigate} from "react-router-dom";

const Dashboard = () => {

 //const router = useNavigate()

//  // funcion de logica del navegador privado
//   const handleClickNavbarPrivate = (e, id, entorno, nombre, ruta)=>{
//     //console.log(nombre);
//     if(id === '1'){
//       router('/private/contacto')
//     }
//     else if(id === '2'){
//       router('/private/alerta')
//     }
//     else if(id === '3'){
//       router('/private/configuracion')
//     }
//     else if(id === '4'){
//       router('/perfil')
//     }
//     else {
//       console.log('d');
      
//     }
//   }


  return (
    <>
    <aside className="w-[3%] ">
            
            <Sidebar
                data= {dataSidebarIndustrial} 
            />

        </aside>
        <main className="w-[97%]">
          <nav className="w-full h-[4%] bg-violet-400 flex justify-end">
            <Navbar
              data={dataNavbarPrivate}  
              //handleClickNavbar={handleClickNavbarPrivate}

            />
          </nav>
          <section className="w-full h-[96%]  flex items-center">
            <article className="w-[70%] h-[95%]  ml-16">
              <header className="w-full h-[4%]  flex items-center">
                Home
              </header>
              <div className="w-full h-[4%]  flex gap-x-2 items-center bg-gray-100">
                <section>
                  <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png" alt="a" />
                </section>
                <section>
                  Intrasec
                </section>
              </div>
              <div className="w-full h-[4%] ">
                  sfsd
              </div>
              <div className="w-full h-[88%] ">
                sdsssssdxxxxx
              </div>
            </article>

          </section>
        </main>
    
    </>
  )
}

export default Dashboard