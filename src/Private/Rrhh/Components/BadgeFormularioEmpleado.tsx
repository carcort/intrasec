

const BadgeFormularioEmpleado = ({el}) => {

  const {id, titulo, placeHolder} = el

  return (
    <div className="w-full h-full">
       <label htmlFor="">{titulo}</label>
       <input className="mt-1 pl-2 w-full h-[45%] border border-gray-200  " placeholder={placeHolder} type="text" />
    </div>
  )
}

export default BadgeFormularioEmpleado