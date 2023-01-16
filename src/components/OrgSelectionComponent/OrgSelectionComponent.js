import React from "react";
import { Link } from 'react-router-dom';
import './OrgSelectionComponent.css'
import axios from '../../apis/easup'
import useAxios from '../../hooks/useAxios'
import LoadingIcon from '../LoadingIcon/LoadingIcon'



function OrganizationIcon(props) {
    function saveOrganizationId() {
        localStorage.setItem("organizationId", JSON.stringify(props.organizationId))
    }

  return (
      <Link to='/tasks' onClick={saveOrganizationId}>
        <div className='organization-icon'>
            <img src={props.photo} alt={props.name} className='logo'/>
            <h2>{props.name}</h2>
        </div>
      </Link>
  );
}

function OrgSelectionComponent() {
  const [organizations, error, loading] = useAxios({
      axiosInstance: axios,
      method: 'GET',
      url: `/organizations/user/1`,
      requestConfig: {}
  })

  return (
    <div>
      <div className='org-selection-component'>

          {loading && <LoadingIcon/>}

          {!loading && error && <h1>{error}</h1>}

          {!loading && !error && !organizations && <h1>Something went wrong</h1>}

          {!loading && !error && organizations &&
              <>
                  <h1>Organizations</h1>
                  <ul className='organization-list'>
                      {organizations.map((orgItem, index) => {
                          return (
                              <OrganizationIcon
                                  key={index}
                                  id={index}
                                  organizationId={orgItem.id}
                                  name={orgItem.name}
                                  photo={orgItem.photo}
                              />
                          );
                      })}
                  </ul>
              </>
          }
      </div>
    </div>
  );
}

export default OrgSelectionComponent;
