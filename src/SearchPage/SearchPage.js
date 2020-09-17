import React, { useEffect } from "react";
import axios from "axios";
import { Planets } from "../Planets/Planets";
import "./SearchPage.css";
import { useHistory } from "react-router-dom";

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const SearchPage = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!props.userName) {
      history.push("/");
    }
  }, [props.userName, history]);

  const [planets, setPlanets] = React.useState([]);
  const getData = (value) => {
    axios
      .get(`https://swapi.dev/api/planets/?search=${value}`)
      .then(({ data }) => {
        setPlanets(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = debounce(getData, 300);
  return (
    <div className="SearchPage">
      <h5>Search for Planets</h5>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <Planets planets={planets} />
    </div>
  );
};

export default SearchPage;
