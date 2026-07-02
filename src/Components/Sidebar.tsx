

const Sidebar = ({data}) => {
  return (
    <div className="w-full h-[50%] bg-gray-100 grid grid-rows-10">
      {data.map((el)=>{
        return <button className={`w-full h-full grid place-items-center ${el.abrir && 'hover:bg-gray-100 cursor-pointer' }`}>
          <img className="w-6 h-6 "  src={el.icono} alt="as" />
        </button>
      })}
    </div>
  )
}

export default Sidebar