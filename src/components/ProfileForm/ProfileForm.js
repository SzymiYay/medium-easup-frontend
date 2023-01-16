import React from 'react';

import './ProfileForm.css';
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";

function Name(props) {
  return <h1 className = "cardName">{props.name}</h1>
}

function Nickname(props) {
  return <h2 className = "cardNickname">{props.nickname}</h2>
}

function Email(props) {
  return <p className = "cardEmail">{props.email}</p>
}

function Description(props) {
  return <p className = "cardDescription">{props.phone}</p>
}

function ProfileForm(props) {

  const [user, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    // url: `/users/${localStorage.getItem("userId")}`,
    url: `/users/1`,
    requestConfig: {}
  })

  return (
  <div className="cardDiv">
    <div className="card">
      <Name className="cardName" name={`${user.name}  ${user.surname}`} />
      <Nickname className="cardNickname" nickname={user.nickname} />
      <hr />
      <Email className="cardEmail" email={user.email} />
      <hr />
      <Description className="cardDescription" phone={user.description} />
    </div>
  </div>
)
}

export default ProfileForm;