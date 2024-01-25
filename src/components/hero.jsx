function Hero() {
  return (
    <>
      <div
        id="home"
        className="hero container-lg  h-80 w-screen sm:h-screen  bg-auto md:bg-cover bg-no-repeat flex flex-col "
      >
        <div className="flex flex-col px-8 gap-6 text-right md:justify-center md:-mt-16  justify-self-center h-full">
          <p className="text-white font-bold  text-4xl md:text-9xl mt-8 md:mt-4">
            IMMORTAL <br></br>FITNESS
          </p>
          <p className="text-white font-bold text-ledt text-sm md:text-2xl ">
            BE <span className="text-red-600">STRONG </span>TRAINING HARD
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
