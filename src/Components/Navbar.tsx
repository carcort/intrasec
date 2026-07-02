
const Navbar = ({data, entorno}) => {

  return (
    <ul className={`${entorno === 'publico' ? 'w[15%]': 'w-[7%]'} h-full  flex  text-[#38ff02] font-semibold`}>
      {data.map((el)=>{    
      return <button  className=" w-[33%] flex justify-center items-center cursor-pointer hover:border-b hover:border-blue-500">
        <img className="w-5 h-5" src={el.icono} alt="d" />
      </button>
     })}
     
    </ul>
  )
}

export default Navbar