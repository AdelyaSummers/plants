import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  const [plants, setPlants] = useState(data);

  const removePlants =(id) => {
    let newPlants = plants.filter( plant => plant.id !==id);
    setPlants(newPlants)
  }
  return (
    <div >
      <div className="container">
        <h1> {plants.length} plants I wish for my birthday</h1>
      </div>

      {plants.map((element => {
        const {id, description, image} = element;

        return (<div key={id}>
          <div className="container">
            <h2>{id} - {description}</h2>
          </div>

          <div className="container">
            <img src={image} width="400px" alt="plants"/>
          </div>
          <div className="container">
            <button onClick={() => removePlants(id)}>remove</button>
          </div>

        </div>)
      }))}

        <div className="container">
          <button onClick={() => setPlants([])}>Delete all</button>
        </div>

    </div>
  );
}

export default App;
