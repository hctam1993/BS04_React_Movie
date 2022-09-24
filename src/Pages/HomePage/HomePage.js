import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ItemMovies from "../../Components/ItemMovies";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/action/actionSpinner";

import { moviesServ } from "../../services/movieService";
import TabMovie from "./TabMovie";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  let dispacth = useDispatch();

  useEffect(() => {
    dispacth(setLoadingOnAction());
    moviesServ
      .getListMovie()
      .then((res) => {
        // console.log(res.data.content);

        setMovies(res.data.content);
        dispacth(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispacth(setLoadingOffAction());
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
