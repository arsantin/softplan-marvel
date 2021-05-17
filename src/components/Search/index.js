import React, { useState } from "react";
import Card from "../Card";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cards {
    color: #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-basis: 100%;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    margin: 40px auto;
    width: 100%;
    max-width: 400px;
    flex-basis: 100%;
  }
`;

const Search = (props) => {
  const [searchString, setsearchString] = useState("");

  const handleChange = (e) => {
    setsearchString(e.target.value);
  };

  let heroResult = props.items.data.results;

  if (searchString.trim().toLowerCase().length > 0) {
    heroResult = heroResult.filter(function (i) {
      return i.name.toLowerCase().match(searchString);
    });
  }

  return (
    <CardWrapper>
      <input
        type="text"
        value={searchString}
        onChange={handleChange}
        placeholder="Busque seu herói"
      />
      <div className="cards">
        {heroResult &&
          heroResult.map((i) => {
            return <Card hero={i} key={i.id} />;
          })}
      </div>
    </CardWrapper>
  );
};

export default Search;
