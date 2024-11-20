import React from "react";


function Locations() {
  const branches = [
    { id: 1, name: "Koramangala Branch", address: "5th Block, Koramangala, Bangalore" },
    { id: 2, name: "Indiranagar Branch", address: "100 Feet Road, Indiranagar, Bangalore" },
    { id: 3, name: "Whitefield Branch", address: "ITPL Main Road, Whitefield, Bangalore" },
    { id: 4, name: "MG Road Branch", address: "Church Street, MG Road, Bangalore" },
    { id: 5, name: "Jayanagar Branch", address: "4th Block, Jayanagar, Bangalore" },
    { id: 6, name: "HSR Layout Branch", address: "27th Main Road, HSR Layout, Bangalore" },
    { id: 7, name: "Electronic City Branch", address: "Phase 1, Electronic City, Bangalore" },
    { id: 8, name: "Yelahanka Branch", address: "Yelahanka New Town, Bangalore" },
    { id: 9, name: "Rajajinagar Branch", address: "1st Block, Rajajinagar, Bangalore" },
    { id: 10, name: "Hebbal Branch", address: "Outer Ring Road, Hebbal, Bangalore" },
  ];

  return (
    <div className="locations">
      <h1>Our Bangalore Locations</h1>
      <p>Find the nearest café to you. Below is a list of our branches in Bangalore:</p>
      <ul className="locations-list">
        {branches.map((branch) => (
          <li key={branch.id} className="location-item">
            <h3>{branch.name}</h3>
            <p>{branch.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;
