import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

const App = () => {
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
    const featuredPup = puppies.find((pup) => pup.id === featPupId);

    function handleClick(puppyId) {
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
