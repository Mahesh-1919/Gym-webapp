import Card from "./card";
function Services() {
  return (
    <>
      <section id="services" className="w-screen md:px-8 p-4 md:pb-16 ">
        <h1 className="sec-head  mb-8">Services</h1>
        <div className=" text-white flex flex-wrap gap-6 justify-center   ">
          <Card
            content="Personal"
            imgurl="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card
            content="Cardio"
            imgurl="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Card
            content="Weight Loss"
            imgurl="https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Card
            content="Body Bulk"
            imgurl="https://as1.ftcdn.net/v2/jpg/04/31/55/92/1000_F_431559277_rkkDdPgYlypnPwf4EoDIlvkVDiWNBBft.jpg"
          />
        </div>
      </section>
    </>
  );
}
export default Services;
