import Pricecard from "./priceCard";
function prices() {
  return (
    <>
      <section id="prices" className="w-screen md:px-8 p-4">
        <h1 className="text-red-600 text-center text-4xl font-bold">Prices</h1>
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
