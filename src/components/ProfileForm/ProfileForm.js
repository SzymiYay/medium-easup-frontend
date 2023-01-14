import React from 'react';

import './ProfileForm.css';

function Name(props) {
  return <h1 className = "cardName">{props.name}</h1>
}

function CompanyName(props) {
  return <h2 className = "cardCompanyName">{props.companyName}</h2>
}

function Address(props) {
  return <p className = "cardAddress">{props.address}</p>
}

function Email(props) {
  return <p className = "cardEmail">{props.email}</p>
}

function Phone(props) {
  return <p className = "cardPhoneNumber">{props.phone}</p>
}

function ProfileForm(props) {
  return (
  <div className="cardDiv">
    <div className="card">
      <Name className="cardName" name="Jan" />
      <CompanyName className="cardCompanyName" companyName="IO" />
      <Address className="cardAddress" address="1234 Main St." />
      <hr />
      <Email className="cardEmail" email="jan@mail.com" />
      <hr />
      <Phone className="cardPhoneNumber" phone="000-000-000" />
    </div>
  </div>
)
}

export default ProfileForm;