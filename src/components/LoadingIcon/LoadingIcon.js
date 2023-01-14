import React from 'react'
import './LoadingIcon.css'
import LoadingIcons from 'react-loading-icons'

const LoadingIcon = () => {
    return (
      <div className='loading-icon-div'>
          <LoadingIcons.TailSpin className='loading-icon'/>
      </div>
    );
}

export default LoadingIcon;
