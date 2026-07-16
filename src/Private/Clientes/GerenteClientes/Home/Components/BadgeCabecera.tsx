

const BadgeCabecera = ({el}) => {
  return (
    <div className="w-full h-full border border-gray-100 flex">
       <div className="w-[30%] h-full grid place-items-center">
          <img className="w-12 h-12" src={el.icono} alt="as" />
       </div>
       <div className="w-[70%] h-full grid grid-rows-2 items-center ">
          <div className="flex justify-center">
            {el.nombre}
          </div>
          <div className="flex justify-center">
            {el.valor}
          </div>
       </div>
    </div>
  )
}

export default BadgeCabecera