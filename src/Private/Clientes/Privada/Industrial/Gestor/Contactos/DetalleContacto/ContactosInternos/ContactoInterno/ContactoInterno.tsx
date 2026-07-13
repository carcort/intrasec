

const ContactoInterno = () => {
  return (
    <div className="w-full h-full   px-4">

      <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros de aguas andina
      </div>
      <div className="w-full h-full">
        {/* <header className="w-full h-[8%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos: Aguas Andina
        </header> */}

        <main className="w-full h-full  gap-12 py-3 ">
          <div className="w-full h-[20%]  flex py-4">
            <div className="w-[10%] grid place-items-center">
             <img className="w-24 h-24" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nestjs.png" alt="zad" />
            </div>
            
            <section className="w-[90%] h-full ">
              <div className="w-full h-[20%] text-xl text-violet-600 font-semibold">
                Pamela Robles Moreno
              </div>
              <section className="w-full h-[80%] grid grid-rows-6">
                 
                  <div >
                      Empresa: Aguas Andina
                  </div>
                  <div >
                      Area: Operaciones
                  </div>
                  <div >
                      Sub_Area: Mantenimiento
                  </div>
                  <div >
                      Cargo: Superintendente
                  </div>
                  <div >
                      Email: pamela_robles@aguasandina.cl
                  </div>
                  <div className="text-violet-600 ">
                      Telefono: +5697986048
                  </div>
              </section>
            </section>
          </div>

          <div className="w-full h-[7%]  bg-gray-50">
             <article className="w-[15%] h-full  grid grid-cols-4">
               {/* {dataFiltroContactoInterno.map((el)=>{
               return <Link
                      to={el?.ruta} 
                      className={`flex h-full justify-center items-center rounded-md  ${
                        isActive(el.ruta) ? 'underline' : ''}`}>
                      {el.nombre}
                    </Link>
             })} */}
             algo
             </article>
             

          </div>

          <main className="w-full h-[63%] ">
           asasas
          </main>
          <section className="w-full h-[10%] flex justify-end text-gray-700">
             <div className="w-[23%]   h-full gap-x-2 flex items-center ">
                <button className="w-[40%] gap-x-3 items-center justify-center flex h-[55%] bg-gray-50-600  cursor-pointer hover:border-b hover:border-violet-600 ">
                   <div>
                    <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png" alt="as" />
                   </div>
                   <div className="font-semibold">
                     Modificar Contacto 
                   </div>
                </button>
                <button className="w-[40%] gap-x-3 items-center justify-center flex h-[55%] bg-gray-50  cursor-pointer hover:border-b hover:border-violet-600 ">
                   <div>
                    <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png" alt="as" />
                   </div>
                   <div className="font-semibold">
                     Eliminar Contacto 
                   </div>
                </button>
                <button  className="w-[20%] h-[55%] bg-gray-800 text-white cursor-pointer hover:bg-black font-semibold">
                     Cerrar
                </button>
             </div>
          </section>
        </main>
      </div>
      
    </div>
  )
}

export default ContactoInterno