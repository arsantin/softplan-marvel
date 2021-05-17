import React from "react";
import styled from "styled-components";

const MainCard = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #ddd;
  a {
    text-decoration: none;
  }
  &:hover {
    background: orange;
    cursor: pointer;
  }
  img {
    width: 250px;
    height: 200px;
    height: auto;
  }
  .card_name {
    color: #000;
    font-weight: 700;
  }
`;

const Card = (props) => {
  return (
    <MainCard>
      <a href={`http://localhost:3000/${props.hero.id}`}>
        <div className="card_pic" key={props.hero.id}>
          <img
            src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className="card_name">{props.hero.name}</div>
      </a>
    </MainCard>
  );
};

export default Card;
