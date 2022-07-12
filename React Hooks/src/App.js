import './App.css';
import { useFetch } from './useFetch';

const App = ({ login }) => {

  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  if (loading) return <h2>Loading...</h2>
  if (error) return <pre>{error}</pre>

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} height="200"/>
      <div>
        {data.login && <h1>{data.login}</h1>}
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default App;
