import React from 'react';

import './OrganizationForm.css';
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

function Name(props) {
  return <h1 className = "cardName">{props.name}</h1>
}

function Mission(props) {
  return <h2 className = "cardNickname">{props.nickname}</h2>
}

function Details(props) {
  return <p className = "cardEmail">{props.email}</p>
}

function Description(props) {
  return <p className = "cardDescription">{props.phone}</p>
}

function OrganizationForm(props) {

  const [organization, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    // url: `/users/${localStorage.getItem("userId")}`,
    url: `/organizations/${localStorage.getItem('organizationId')}`,
    requestConfig: {}
  })

  return (
    <>
      {loading && <LoadingIcon/>}

      {!loading && error && <h1>{error}</h1>}

      {!loading && !error && !organization && <h1>Something went wrong</h1>}

      {!loading && !error && organization &&
        <div className="cardDiv">
          <div className="card">
            <Name className="cardName" name={`${organization.name}`} />
            <Mission className="cardMission" nickname={organization.mission} />
            <hr />
            <Details className="cardDetails" email={organization.details} />
            <hr />
            <Description className="cardDescription" phone={organization.description} />
          </div>
        </div>}
    </>
  )
}

export default OrganizationForm;