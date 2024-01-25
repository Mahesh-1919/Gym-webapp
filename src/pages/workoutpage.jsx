import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "../components/shimmerUi";
const Workout = () => {
  let { id } = useParams();
  const [targetList, settargetList] = useState([]);
  useEffect(() => {
    const url =
      "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" +
      id +
      "?limit=20";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c8fea22dfcmshcd170297b2abc73p1deedajsn08b886463ea5",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => settargetList(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div id="workouts">
      <h1 className="text-center text-3xl p-8  text-red-600  font-bold">
        {id.toUpperCase()}
      </h1>
      {!targetList ? (
        <ShimmerUi />
      ) : (
        <div className="flex gap-4 flex-wrap list-none justify-center  ">
          {targetList.map((item) => (
            <li key={item.id} className="">
              <h1 className="text-center p-4 truncate">{item.name}</h1>
              <img
                src={item.gifUrl}
                alt="image"
                className="h-48 w-48 md:h-auto md:w-auto mx-auto"
              />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Workout;
