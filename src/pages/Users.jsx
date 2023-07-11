import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [userData, setUserData] = useState({})

  async function getUserInfo() {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUserData(data)
  }

  useEffect(() => {
        getUserInfo();
  }, []);

  return (
  <div>
    <Link to="/">Go back</Link>
    <h1>{userData?.id}</h1>
    <h1>{userData?.name}</h1>
    <h1>{userData?.email}</h1>
    <h1>{userData?.username}</h1>
  </div>
    );
}

export default Users;
