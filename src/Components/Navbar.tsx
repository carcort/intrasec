
const Navbar = ({data, entorno, handleClickNavbar}) => {

  return (
    <ul className={` h-full w-full  flex  text-white font-semibold justify-between px-3`}>
        
      <div className="w-[15%] flex justify-between">
        {data.slice(0,4).map((el)=>{
          return <button>
            { el.nombre}
          </button>
        })}
      </div>
      
      
      <div className="w-[10%] flex ">
          {data.slice(5,9).map((el)=>{    
            return <button  className=" w-[33%] flex justify-center items-center cursor-pointer hover:border-b hover:border-blue-500">
              <img className="w-5 h-5" src={el.icono} alt="d" />
            </button>
          })}
      </div>
     
    </ul>
  )
}

export default Navbar