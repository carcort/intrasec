import { useNavigate } from "react-router";

const BadgeContactoInterno = ({el}) => {

   const navegar = useNavigate()

   const handleClickContactoInterno =()=>{
      navegar('/private/clientes/privada/industrial/gestor/contactos/contactoInterno')
   }

  return (
    <div onClick={handleClickContactoInterno} className="w-full h-full shadow-sm flex hover:shadow-lg cursor-pointer">
      <div className="w-[30%] h-full grid place-items-center">
         <img className="w-20 h-20" src={el.icono_contacto} alt="sdsd" />
      </div>
      <main className="w-[70%] h-full grid grid-rows-5 p-3 ">
         <section className="w-[50%] flex text-violet-500 font-semibold gap-x-1 text-lg">
            <div className="w-full ">
              {el.primer_nombre_contacto}
            </div>
            <div className="w-full ">
               {el.apellido_paterno_contacto}
            </div>
            <div className="w-full ">
               {el.apellido_materno_contacto}
            </div>
         </section>
         <div className="w-full ">
            Area: {el.area_contacto}
         </div>
         <div className="w-full ">
            Cargo: {el.cargo_contacto}
         </div>
         <div className="w-full text-violet-600">
            Email: {el.email_contacto}
         </div>
         <div className="w-full ">
            Telefono 1:{el.telefono1_contacto}
         </div>
         <div className="w-full ">
            Telefono 2:{el.telefono2_contacto}
         </div>
      </main>
    </div>
  )
}

export default BadgeContactoInterno