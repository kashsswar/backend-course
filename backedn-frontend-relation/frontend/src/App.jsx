import { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
     axios.get(`/api/jokes`) 
     .then((response)=>{
      setJokes(response.data)
     }) 
     .catch((err)=>{
      console.log(err)
     })
  }, [])
  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.author}</p>
        </div>
      ))}
    </>
  );
}

export default App;
