import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Online Café!</h1>
      <p>
        At Online Café, we believe every sip of coffee should be an experience. 
        Our carefully curated menu features premium coffee blends, delectable snacks, 
        and seasonal specials crafted to delight your taste buds. Whether you're starting 
        your morning, working on a project, or enjoying a casual evening, we're here to serve.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>🌟 Premium Coffee and Fresh Ingredients</li>
        <li>📍 Convenient Locations Across the City</li>
        <li>💻 Seamless Online Ordering Experience</li>
        <li>🎉 Exciting Deals and Reward Points</li>
      </ul>

      <h2>What We Offer</h2>
      <div className="home-sections">
        <div>
          <h3>Hot Brews</h3>
          <p>Relish our aromatic and rich coffees, from espresso to cappuccinos.</p>
        </div>
        <div>
          <h3>Cold Brews</h3>
          <p>Cool down with our refreshing iced coffees and frappes.</p>
        </div>
        <div>
          <h3>Delicious Snacks</h3>
          <p>Pair your coffee with fresh pastries, sandwiches, and more.</p>
        </div>
      </div>

      <h2>Ready to Explore?</h2>
      <p>
        Learn more about our story, values, and what makes Online Café the perfect spot for coffee lovers.
      </p>
      <a href="/know-more" className="home-know-more-link">Know More</a>
    </div>
  );
}

export default Home;
