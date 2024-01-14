import React from 'react';
import {useParams} from 'react-router-dom'

const UsersDetails = () => {
    const {userId} = useParams();
  return (
    <div>
      <h1>Users Details</h1>
      <p>user {userId} - Details</p>
    </div>
  )
}

export default UsersDetails
