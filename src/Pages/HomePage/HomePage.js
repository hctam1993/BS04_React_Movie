import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ItemMovies from "../../Components/ItemMovies";
import Spinner from "../../Components/Spinner/Spinner";
import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../../redux/constants/constantSpinner";
import { moviesServ } from "../../services/movieService";
import TabMovie from "./TabMovie";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  let dispacth = useDispatch();

  useEffect(() => {
    dispacth({
      type: SET_LOADING_ON,
    });
    moviesServ
      .getListMovie()
      .then((res) => {
        // console.log(res.data.content);
        dispacth({
          type: SET_LOADING_OFF,
        });
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        dispacth({
          type: SET_LOADING_OFF,
        });
      });
  }, []);
  let renderMovies = () => {
    return movies.map((data, key) => {
      return <ItemMovies data={data} key={key} />;
    });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4">{renderMovies()}</div>
      <TabMovie />
      {/* {isLoading && <Spinner />} */}
    </div>
  );
}
