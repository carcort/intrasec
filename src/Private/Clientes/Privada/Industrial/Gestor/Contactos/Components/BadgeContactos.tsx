
import { useNavigate } from "react-router";

const BadgeContactos = ({el}) => {

   const navegar = useNavigate()

   const handleClickBadgeEmpleado=()=>{
      navegar('/private/clientes/privada/industrial/gestor/contactos/detalleContacto')
   }

  return (
    <div onClick={handleClickBadgeEmpleado} className="w-full h-full flex p-4 cursor-pointer shadow-sm hover:shadow-lg">
      <div className="w-[30%] h-full grid place-items-center">
         <img className="w-20 h-20" src={el.icono_empresa} alt="sdsd" />
      </div>
      <main className="w-[40%] h-full grid grid-rows-5 px-2">
         <div className="w-full text-violet-500 font-semibold">
            {el.nombre_empresa}
         </div>
         <div className="w-full ">
            {el.tipo_empresa}
         </div>
         <div className="w-full ">
            {el.division}
         </div>
         <div className="w-full ">
            {el.area_empresa}
         </div>
         <div className="w-full ">
            {el.sub_area}
         </div>
      </main>

      
      <section className="w-[30%] h-full grid grid-rows-2">

            <article className="w-full h-full  ">
                  <div className={` flex-col items-center`}>
                     <div className="font-semibold text-gray-600">
                        Encargado: 
                     </div>
                     <div className="flex gap-x-2">
                        <div>
                           <img className="w-4 h-4" src={el.icono_encargado} alt="" />
                        </div>
                        <div>
                           {el.encargado_empresa}
                        </div>
                     </div>
                  </div>
            </article>

            <article className="grid items-end py-7">
                  <div className={`${el.ingreso === 'Interno' ? 'text-gray-700 font-semibold': 'text-blue-700 font-semibold'}`}>
                     {el.ingreso}
                  </div>
                  {el.ingreso === 'Interno' && 
                     <div className={`${el.ingreso === 'Interno' ? 'text-gray-700 font-semibold': 'text-blue-700 font-semibold'} w-full flex gap-x-2`}>
                        <div>
                           <img className="w-5 h-5" src={el.icono_usuario} alt="" />
                        </div>
                        <div>
                           {el.usuario_ingreso}
                        </div>
                     </div>
                  }

            </article>

         </section>
    </div>
  )
}

export default BadgeContactos