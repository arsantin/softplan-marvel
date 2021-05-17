import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Menu from "../Menu";
import FormEditar from "../FormEditar";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProfileWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  padding: 20px;
  border-radius: 5px;
  h1 {
    color: orange;
  }
  img {
    max-width: 100%;
    margin-top: 20px;
    height: auto;
    border: solid 1px #eee;
  }
`;

function Profile() {
  const [profile, setProfile] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=52e4da966092a15b43fe480e77b944a1&ts=1&hash=a20eef36fe7816306447b3ef990f12e9&limit=100`
      )
      .then((res) => {        
        setProfile(res.data.data.results[0]);
      });
  }, []);

  return (
    <ProfileWrapper key={Math.random()}>
      <Menu />
      {profile.thumbnail && (
        <img
          src={`${profile.thumbnail.path}.${profile.thumbnail.extension}`}
          alt=""
        />
      )}
      <h1>{profile.name}</h1>
      <h2>Series</h2>
      <ul>
        {profile.series &&
          profile.series.items.map((serie) => {
            return (
              <>
                <li key={serie.name}>{serie.name}</li>
              </>
            );
          })}
      </ul>
      <ul>
        <li>
          <Link to={`/${profile.name}/${profile.id}/edit`}>editar</Link>
        </li>
      </ul>

      <Route path="/:name/:id/edit">
        <FormEditar />
      </Route>
    </ProfileWrapper>
  );
}

export default Profile;
