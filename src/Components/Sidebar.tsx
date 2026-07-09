

const Sidebar = ({data}) => {
  return (
    <div className="w-full h-[60%] bg-gray-100 grid  place-items-center">
      <div className="w-[90%] h-[90%]  px-4">
        <header className="w-full h-[10%] flex items-center gap-x-2">
          <div className="grid ">
            <img className="w-4 h-4" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config.png" alt="a" />
          </div>
          <div>
            Empleados
          </div>
        </header>
        <div className="w-full h-[90%] grid grid-rows-8">
          {data.map((el)=>{
            return <button className={`pl-2 w-full h-full flex items-center hover:bg-gray-200 cursor-pointer`}>
              {el.nombre}
            </button>
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Sidebar