import Pricecard from "./priceCard";
function prices() {
  return (
    <>
      <section id="prices" className="w-screen md:px-8 p-4">
        <h1 className="sec-head ">Prices</h1>
        <div className=" text-white flex flex-wrap p-8 gap-6 justify-center ">
          <Pricecard price="49" />
          <Pricecard price="54" />
          <Pricecard price="69" />
        </div>
      </section>
    </>
  );
}
export default prices;
