import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerUi from "./shimmerUi";
const Workouts = () => {
  const [list, setlist] = useState([]);
  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
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
        .then((data) => setlist(data));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section id="workouts">
      <h1 className="sec-head ">Workouts</h1>
      {!list ? (
        <ShimmerUi />
      ) : (
        <ul className="flex   gap-2 md:gap-6 p-8 md:w-5/6 flex-wrap justify-center text-sm md:text-lg mx-auto">
          {/* {list.map((item, index) => (
            <Link to={`/workoutspage/${item}`} key={index}>
              <li key={index} className="workout-item">
                {item}
              </li>
            </Link>
          ))} */}

          {console.log(list)}
        </ul>
      )}
    </section>
  );
};

export default Workouts;
