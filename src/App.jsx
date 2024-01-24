import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

const App = () => {
    // State to manage the list of puppies
    const [puppies, setPuppies] = useState(puppyList);

    // State to track the ID of the featured puppy
    const [featPupId, setFeatPupId] = useState(null);

    // Finding the featured puppy based on the ID
    const featuredPup = puppies.find((pup) => pup.id === featPupId);

    // Handling click events on puppy items
    function handleClick(puppyId) {
        // Setting the ID of the clicked puppy as the featured puppy ID
        setFeatPupId(puppyId);
    }

    return (
        <div className="App">
            <div className="puppies-list">
                {puppies.map((puppy) => (
                    <p
                        onClick={() => handleClick(puppy.id)}
                        key={puppy.id}
                        className="puppy-item"
                    >
                        {puppy.name}
                    </p>
                ))}
            </div>
            {featPupId && (
                <div className="featured-puppy">
                    <h2>{featuredPup.name}</h2>
                    <ul>
                        <li>Age: {featuredPup.age}</li>
                        <li>Email: {featuredPup.email}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
