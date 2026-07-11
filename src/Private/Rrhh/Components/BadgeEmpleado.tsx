import { useNavigate } from "react-router";

const BadgeEmpleado = ({el}) => {

   const navegar = useNavigate()

   const handleClickBadgeEmpleado=()=>{
      navegar('/private/perfil')
   }

  return (
    <div onClick={handleClickBadgeEmpleado} className="w-full h-full  p-4 cursor-pointer shadow-sm hover:shadow-lg">
      <div className="w-full h-[40%] grid place-items-center">
         <img className="w-20 h-20" src={el.icono} alt="sdsd" />
      </div>
      <main className="w-full h-[70%] ">
         <div className="flex w-full h-[20%] font-semibold gap-x-2  justify-center">
           <div>
            {el.primer_nombre}
           </div>
           <div>
            {el.apellido_paterno}
           </div>
           <div>
            {el.apellido_materno}
           </div>
         </div>
         <div className="w-full h-[15%] flex justify-center">
            {el.gerencia}
         </div>
         <div className="w-full h-[15%] flex justify-center">
            {el.division}
         </div>
         <div className="w-full h-[15%] flex justify-center">
            {el.area}
         </div>
         <div className="w-full h-[15%] flex justify-center">
            {el.cargo}
         </div>
      </main>
    </div>
  )
}

export default BadgeEmpleado