
const Home = () => {
  return (
    <div className="w-full h-full  grid place-items-center">
        <section className="w-[70%] h-[60%]  flex">
           <article className="w-full h-full pt-28 px-2">
            <header className="w-full h-[40%]">
              <h1 className="text-7xl">Gestion Interna de Intrasec</h1>
            </header>
            <div className="w-full h-[35%]">
              <h2 className="text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam consequatur, cum aperiam exercitationem aliquid libero? Ea mollitia cum aperiam quia at maxime minus voluptates! Voluptatum itaque enim quasi molestias reiciendis.
              </h2>
            </div>
            <div className="w-full h-[25%] flex gap-x-5 ">
              <button className="bg-blue-600 text-white w-full h-[50%] cursor-pointer hover:bg-blue-700">
                Solicitar Demo
              </button>
              <button className="bg-[#38ff02] text-white w-full h-[50%] cursor-pointer hover:bg-green-600"> 
                Prueba Gratis!
              </button>
            </div>
           </article>

           <article className="w-full h-full grid place-items-center">
              <div className="w-[70%] h-[70%]">
                  <img className="w-full h-full" src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png" alt="sd" />
              </div>
           </article>
        </section>
    </div>
  )
}

export default Home