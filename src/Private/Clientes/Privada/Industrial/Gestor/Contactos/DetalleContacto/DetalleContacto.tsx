

const DetalleContacto = () => {
  return (
    <div className="w-full h-full   px-4">

      <div className="w-full h-[5%] flex justify-end bg-gray-100">
        filtros de aguas andina
      </div>
      <div className="w-full h-[95%]">
        <header className="w-full h-[8%] grid place-items-center text-lg font-semibold text-gray-600">
          Contactos: Aguas Andina
        </header>

        <main className="w-full h-[92%]  gap-12 py-3 bg-cyan-300">
          <div className="w-full h-[20%] bg-red-400 flex">
            <div className="w-[10%] grid place-items-center">
             <img className="w-24 h-24" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png" alt="zad" />
            </div>
            
            <section className="w-[90%] h-full ">
              <div className="w-full h-[20%] text-xl text-violet-600 font-semibold">
                Aguas Andina
              </div>
              <section className="w-full h-[80%] grid grid-rows-6">
                 
                  <div >
                      Area: Sanitaria
                  </div>
                  <div >
                      Es Cliente: Si
                  </div>
                  <div >
                      N° Empleados: + 1500
                  </div>
                  <div >
                      Region: Metropolitana
                  </div>
                  <div >
                      Direccion Empresa: Calle 3434, Avenida Apoquinos N°5452
                  </div>
                  <div className="text-violet-600 ">
                      web: http://aguasandina.cl
                  </div>
              </section>
            </section>
          </div>

          <div className="w-full h-[5%] bg-yellow-300">
           filtrosss
          </div>

          <main className="w-full h-[65%] bg-orange-400">
           cuerpaaa
          </main>
          <section className="w-full h-[10%] flex justify-end">
             <div className="w-[13%]  bg-cyan-400 h-full gap-x-2 flex items-center ">
                <button className="w-[75%] gap-x-3 items-center justify-center flex h-[55%] bg-violet-600 text-white cursor-pointer hover:bg-violet-700 ">
                   <div>
                    <img className="w-5 h-5" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png" alt="as" />
                   </div>
                   <div className="font-semibold">
                     Crear Contacto Interno
                   </div>
                </button>
                <button className="w-[25%] h-[55%] bg-gray-800 text-white cursor-pointer hover:bg-black font-semibold">
                     Cerrar
                </button>
             </div>
          </section>
        </main>
      </div>
      
    </div>
  )
}

export default DetalleContacto