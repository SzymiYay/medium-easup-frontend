import React from "react";
import { useState } from "react";
import './OrgSelectionComponent.css'
import data from '../../data/organizations.json'

function OrganizationIcon(props) {
  return (
    <div className='organization-icon'>
      <h1>{props.name}</h1>
      <img src={props.photo} alt={props.name} />
    </div>
  );
}

function OrgSelectionComponent() {
  let [organizations, setOrganizations] = useState(data);

  return (
    <div>
      <div className='org-selection-component'>
        <h1>Organizations</h1>
        <ul>
          {organizations.map((orgItem, index) => {
            return (
              <OrganizationIcon
                key={index}
                id={index}
                name={orgItem.name}
                photo={orgItem.photo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OrgSelectionComponent;