

const BadgeContactoInterno = ({el}) => {
  return (
    <div className="w-full h-full border border-gray-200 flex">
      <div className="w-[30%] h-full grid place-items-center">
         <img className="w-20 h-20" src={el.icono_contacto} alt="sdsd" />
      </div>
      <main className="w-[40%] h-full grid grid-rows-5 p-3 ">
         <section className="w-full flex text-violet-500 font-semibold gap-x-1">
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
            {el.area_contacto}
         </div>
         <div className="w-full ">
            {el.cargo_contacto}
         </div>
         <div className="w-full ">
            {el.email_contacto}
         </div>
         <div className="w-full ">
            {el.telefono1_contacto}
         </div>
         <div className="w-full ">
            {el.telefono2_contacto}
         </div>
      </main>
    </div>
  )
}

export default BadgeContactoInterno