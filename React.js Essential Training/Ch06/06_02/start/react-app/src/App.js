import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar, bio }) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <img src={avatar} height={150} alt={name}/>
        <p>{bio}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/uzzal71`
    )
      .then((response) => response.json())
      .then(setData); 
  }, []);
  if (data)
    return (
      <GithubUser 
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
        bio={data.bio}
      />
    );
  return <h1>Data</h1>;
}

export default App;
