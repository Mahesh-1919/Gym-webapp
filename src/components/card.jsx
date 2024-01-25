import { GrYoga } from "react-icons/gr";
function card(props) {
  return (
    <>
      <div className="flex flex-col items-center p-4   md:p-0 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-2/5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gradient-to-r from-slate-900 to-slate-800 dark:hover:bg-gray-700">
        <img
          className="object-cover  rounded-t-lg h-48 w-48 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
          src={props.imgurl}
          alt=""
        />
        {/* <GrYoga className="text-9xl  px-8 " /> */}
        <div className="flex flex-col justify-between p-4 leading-normal overflow-hidden">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.content}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden md:block">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </>
  );
}
export default card;
