import { Link, useLocation } from "react-router"


const Sidebar = ({data}) => {

  const location = useLocation();

 const isActive = (path) => location.pathname === path;


  return (
    <div className="w-full h-[90%] bg-gray-50 grid  place-items-center rounded">
      <div className="w-full h-full ">
        <div className="w-full h-full grid grid-rows-12">
          {data.map((el)=>{
            return <Link
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md font-medium ${
                        isActive(el.ruta) 
                          ? ' bg-gray-200' 
                          : ''
                      }`}
                    >
                      <img className="w-5 h-5" src={el.icono} alt="as" />
                    </Link>
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Sidebar