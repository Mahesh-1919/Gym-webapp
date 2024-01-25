function About() {
  return (
    <>
      <section
        id="about"
        className="container-lg bg-black w-screen md:p-8 p-4 "
      >
        <h1 className="sec-head  ">About Us</h1>
        <div className="flex flex-col items-center  md:flex-row md:pt-8 md:gap-4 md:w-3/4 mx-auto">
          <div className="  ">
            <img
              className=" w-44 md:w-96 t"
              src="ASSETS\edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
              alt="trainer"
            />
          </div>
          <div className="text-center  md:text-left text-sm mx-auto text-white  ">
            <p className="w-4/5 mx-auto ">
              Lorem ipsum dolor sit amet consectetur is the, adipisicing elit.
              Dignissimos debitis teneturLorem ipsum dolor sit amet consectetur
              is the, adipisicing elit. Dignissimos debitis{" "}
            </p>
            <p className="w-4/5 mx-auto hidden md:block">
              Lorem ipsum dolor sit amet consectetur is the, adipisicing elit.
              Dignissimos debitis teneturLorem ipsum dolor sit amet consectetur
              is the, adipisicing elit. Dignissimos debitis{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
