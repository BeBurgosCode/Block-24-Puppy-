import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={() => {
              console.log("puppy.id: ", puppy.id);
            }}
          >
            {puppy.name}
            {featPupId && (
              <div>
                <h2>{featuredPup.name}</h2>
                <ul>
                  <li>Age: {featuredPup.age}</li>
                  <li>Email: {featuredPup.email}</li>
                </ul>
              </div>
            )}
          </p>
        );
      })}
    </div>
  );
}

export default App;
