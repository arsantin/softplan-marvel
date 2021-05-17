import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.ul`
  margin: 0px;
  li {
    list-style: none;
    float: right;
    a {
      background: #730e5e;
      display: block;
      padding: 5px;
      text-decoration: none;
      border-radius: 3px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      max-width: 120px;
      text-align: center;
      font-size: 12px;
    }
  }
`;

const Menu = (props) => {
  return (
    <nav>
      <MenuWrapper>
        <ul>
          <li>
            <Link to="/">voltar</Link>
          </li>
        </ul>
      </MenuWrapper>
    </nav>
  );
};

export default Menu;
