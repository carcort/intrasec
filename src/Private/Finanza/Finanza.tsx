import { Navigate } from "react-router";
import Sidebar from "../../Components/Sidebar";
import { dataSidebarIndustrial } from "../../Components/Utils/dataSIdebar/dataSidebarCliente/dataSidebarConsultor/dataSidebarIndustria/dataSidebarIndustrial";


const Finanza = ({usuario}) => {
  const {id,  icono, apellido_paterno,estaAutenticado, apellido_materno, gerencia, primer_nombre} = usuario

  if (!estaAutenticado) {
    return <Navigate to={'/'} replace />;
  }

  if(gerencia !== 'Finanza'){
    return <Navigate to={'/'} replace />;
  }

  if(gerencia === 'Finanza'){
      return (
    <>
          <aside className="w-[3%] "> 
            <Sidebar
                data= {dataSidebarIndustrial} 
            />
         </aside>
         <section className="w-full h-[96%]  flex items-center">
            <article className="w-[70%] h-[95%]  ml-16">
              <header className="w-full h-[4%]  flex items-center">
                Finanza - {estaAutenticado && 'AUTENTICADO'}
              </header>
              <div className="w-full h-[4%]  flex gap-x-2 items-center bg-gray-100">
                <section>
                  <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png" alt="a" />
                </section>
                <section>
                  Intrasec - {primer_nombre} {apellido_paterno}
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
        </>
  )
  }
}

export default Finanza