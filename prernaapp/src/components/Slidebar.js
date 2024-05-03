import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt, faHeart, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';

export default function Slidebar() {
  return (
    
        
        <div className=" border-secondary w h-100 d-inline-block border-secondary border-right">
          <h1 className='text-success font-italic pt-3 pb-4'>PS</h1>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 border-top-0 pb-4 mt-4">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4 ">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            
          </a>
          <a href="#" className="list-group-item list-group-item-action border-bottom-0 border-left-0 pb-4 pt-4">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            
          </a>
          
        </div>
          
   
  )
}
