import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(users)
    console.log(users.length)
  }

  useEffect(() => {
    setTimeout(() => {
        fetchUsers();
    }, 2000);
  }, []);

  function getUsers(){
    return <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))}
    </div>
  }

  return (
    <div>
        {users.length ? getUsers() : <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
