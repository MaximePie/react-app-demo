import React, {useEffect, useState} from 'react';
import Button from "../atoms/Button";
import {getCats} from "../../server";

export default function Cats() {
  const [cats, setCats] = useState([]);
  useEffect(fetchCats, []);

  return (
    <div className="Cats">
      C'est le component Cats
      <img src={cats.url} alt="Cat picture"/>
      <Button text="Gif" onClick={() => fetchCats('gif')}/>
      <Button text="Photo" onClick={() => fetchCats('png')}/>
    </div>
  );

  /**
   * La fonction récupère des chats et met à jour le state en appelant la méthode getCats de server
   * @param type String qui représente le type de la photo souhaitée. (png, ou gif)
   */
  function fetchCats(type = 'png') {
    getCats(type).then(response => {
      setCats(response.data[0]);
    })
  }
}
