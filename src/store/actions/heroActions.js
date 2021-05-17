import { FETCH_HEROES, CHANGE_NAME } from "./types";
import storage from "redux-persist/lib/storage";

export const fetchHeroes = () => (dispatch) => {
  fetch(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=52e4da966092a15b43fe480e77b944a1&ts=1&hash=a20eef36fe7816306447b3ef990f12e9&limit=100"
  )
    .then((res) => res.json())
    .then((heroes) =>
      dispatch({
        type: FETCH_HEROES,
        payload: heroes,
      })
    );
};

export const changeName = (e) => (dispatch) => {
  e.preventDefault();
  const pathInput = document.querySelector("#name").value;
  const pathId = parseInt(document.querySelector("#id").value);

  dispatch({
    type: CHANGE_NAME,
    payload: { id: pathId, name: pathInput },
  });
};
