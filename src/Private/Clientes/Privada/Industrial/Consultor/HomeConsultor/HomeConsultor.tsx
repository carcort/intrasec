

const HomeConsultor = ({usuario}) => {
  return (
    <div className="w-[97%] h-full bg-violet-400">
     <header className="w-full h-[5%] grid place-items-center">
      Home - {usuario.area}
     </header>
     <main className="w-full h-[95%] bg-orange-400">
       <section className="w-full h-[7%]">
        lista
       </section>
       <div className="w-full h-[93%] bg-yellow-400">
        grafics
       </div>
     </main>
    </div>
  )
}

export default HomeConsultor