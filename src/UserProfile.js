import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom"

function UserProfile() {
    const [user, setUser] = useState({});
  
    // Use `useParams()` and `useEffect()`
    // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}
    const userId = useParams().userId;
    useEffect(() => {
      async function loadUser() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
      }
      loadUser();
    }, [userId]);
  
    // No need to change anything below here
    if (user.id) {
      return Object.entries(user).map(([key, value]) => (
        <div key={key}>
          <label>{key}</label>: {JSON.stringify(value)}
          <hr />
        </div>
      ));
    }
    return "Loading...";
  }
  
  export default UserProfile;