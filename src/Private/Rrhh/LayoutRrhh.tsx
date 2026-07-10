import { Outlet } from "react-router"



const LayoutRrhh = () => {
  return (
    <div className=' w-full h-full grid place-items-center'>
      <div className="w-[98%] h-[90%]">
        <div className="w-full h-[5%]  flex justify-end">
          <div className="w-[14%] h-full  flex">
            {/* {dataFiltroEmpleados.map((el)=>{
              return <div>
                <div>
                  {el.nombre}
                </div>
                <div>
                  {el.filtros.map((el)=>{
                    return <button>
                      {el.nombre}
                    </button>
                  })}
                </div>
              </div>
            })} */}

            aca van los filtros
          </div>
        </div>
        <div className="w-full h-[85%]">
            <Outlet/>
        </div>

        <section className="w-full h-[10%] flex justify-center ">
          <div className="flex w-[10%] items-center justify-center h-full font-semibold text-gray-600 text-lg">
                  <div className="w-[40%] f-[50%]">
                    1-14 / 51
                  </div>
                  <div className="w-[40%] h-[50%] flex gap-x-1">
                    <button className="w-[80%] bg-gray-100 cursor-pointer hover:bg-gray-200">
                      {'<'}
                    </button>
                    <button className="w-[80%] bg-gray-100 cursor-pointer  hover:bg-gray-200">
                      {'>'}
                    </button>
                  </div>
              </div>
        </section>
      </div>
    </div>
  )
}

export default LayoutRrhh