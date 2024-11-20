import React, { useState } from "react";


const Order = () => {
  const categories = {
    "Hot Brews": [
      { name: "Cappuccino", price: 220, description: "A creamy, rich coffee with milk foam." },
      { name: "Espresso", price: 180, description: "A strong shot of pure coffee." },
      { name: "Latte", price: 240, description: "Smooth coffee with steamed milk." },
      { name: "Flat White", price: 250, description: "A velvety coffee with microfoam." },
      { name: "Americano", price: 210, description: "A classic black coffee." },
      { name: "Mocha", price: 260, description: "A chocolate-flavored coffee treat." },
      { name: "Caramel Macchiato", price: 280, description: "Sweet caramel coffee goodness." },
      { name: "Irish Coffee", price: 300, description: "Coffee with a splash of Irish whiskey." },
      { name: "Chai Latte", price: 230, description: "A spiced tea and milk blend." },
      { name: "Hot Chocolate", price: 270, description: "Rich and creamy chocolate drink." },
    ],
    "Cold Brews": [
      { name: "Iced Latte", price: 260, description: "Cool and creamy coffee." },
      { name: "Iced Americano", price: 230, description: "Refreshing cold black coffee." },
      { name: "Cold Brew", price: 250, description: "Smooth, slow-steeped coffee." },
      { name: "Nitro Cold Brew", price: 300, description: "Velvety coffee with a creamy head." },
      { name: "Iced Mocha", price: 280, description: "Chilled coffee with chocolate." },
      { name: "Frappuccino", price: 320, description: "Blended coffee beverage." },
      { name: "Iced Caramel Macchiato", price: 300, description: "Sweet iced caramel delight." },
      { name: "Iced Vanilla Latte", price: 280, description: "Cool coffee with vanilla flavor." },
      { name: "Cold Coffee", price: 240, description: "Classic cold coffee refreshment." },
      { name: "Iced Chai Latte", price: 250, description: "A spiced cold tea latte." },
    ],
    "Summer Drinks": [
      { name: "Mango Smoothie", price: 290, description: "A tropical mango delight." },
      { name: "Lemonade", price: 190, description: "A tangy, refreshing drink." },
      { name: "Peach Iced Tea", price: 250, description: "Sweet peach-infused iced tea." },
      { name: "Berry Cooler", price: 300, description: "Mixed berry summer drink." },
      { name: "Pineapple Punch", price: 320, description: "A zesty pineapple mix." },
      { name: "Watermelon Cooler", price: 280, description: "Chilled watermelon refreshment." },
      { name: "Mint Mojito", price: 260, description: "A cooling minty beverage." },
      { name: "Strawberry Lemonade", price: 270, description: "Sweet and tart summer drink." },
      { name: "Green Tea Lemonade", price: 250, description: "A refreshing green tea blend." },
      { name: "Coconut Water Splash", price: 200, description: "Natural and hydrating." },
    ],
    "Small Bites": [
      { name: "Cheese Croissant", price: 160, description: "Flaky croissant with melted cheese." },
      { name: "Veggie Sandwich", price: 200, description: "Grilled veggies in fresh bread." },
      { name: "Chicken Roll", price: 240, description: "Tender chicken in a crispy wrap." },
      { name: "Paneer Wrap", price: 220, description: "Paneer and veggies in a soft wrap." },
      { name: "French Fries", price: 150, description: "Crispy and golden potato fries." },
      { name: "Garlic Bread", price: 140, description: "Toasted bread with garlic butter." },
      { name: "Veggie Pizza Slice", price: 180, description: "A cheesy slice with fresh veggies." },
      { name: "Chicken Wings", price: 280, description: "Spicy and juicy wings." },
      { name: "Samosa", price: 100, description: "Crispy pastry filled with spiced potatoes." },
      { name: "Nachos", price: 230, description: "Tortilla chips with cheese and salsa." },
    ],
    "Pastries": [
      { name: "Chocolate Cake Slice", price: 300, description: "Rich and moist chocolate cake." },
      { name: "Red Velvet Cake Slice", price: 320, description: "Velvety cake with cream cheese frosting." },
      { name: "Blueberry Muffin", price: 250, description: "Soft muffin with blueberry filling." },
      { name: "Cheesecake Slice", price: 350, description: "Classic cheesecake with a graham crust." },
      { name: "Black Forest Cake Slice", price: 300, description: "Chocolate and cherry layered cake." },
      { name: "Vanilla Cupcake", price: 200, description: "Fluffy cupcake with vanilla frosting." },
      { name: "Strawberry Tart", price: 270, description: "Crispy tart with strawberry filling." },
      { name: "Choco Lava Cake", price: 340, description: "Cake with gooey chocolate center." },
      { name: "Banana Bread", price: 220, description: "Moist and flavorful banana bread." },
      { name: "Pineapple Pastry", price: 280, description: "Soft pastry with pineapple cream." },
    ],
  };

  const recommendedItems = [
    { name: "Latte", category: "Hot Brews", price: 240 },
    { name: "Cold Brew", category: "Cold Brews", price: 250 },
    { name: "Berry Cooler", category: "Summer Drinks", price: 300 },
    { name: "Cheese Croissant", category: "Small Bites", price: 160 },
    { name: "Chocolate Cake Slice", category: "Pastries", price: 300 },
  ];

  const [preferences, setPreferences] = useState("No Filter");
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (item, value) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.min(Math.max((prev[item] || 1) + value, 1), 20),
    }));
  };

  return (
    <div className="order">
      <h2>Recommended Items</h2>
      <select
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
        className="preferences-dropdown"
      >
        <option value="No Filter">No Filter</option>
        <option value="Veg">Veg</option>
        <option value="Egg">Egg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>
      <div className="recommended-items">
        {recommendedItems.map((item, index) => (
          <div key={index} className="recommended-item">
            <p>{item.name} - ₹{item.price}</p>
          </div>
        ))}
      </div>
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="order-category">
          <h2>{category}</h2>
          <div className="category-items">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <h3>{item.name} - ₹{item.price}</h3>
                <p className="description">{item.description}</p>
                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(item.name, -1)}>
                    -
                  </button>
                  <span>{quantities[item.name] || 1}</span>
                  <button onClick={() => handleQuantityChange(item.name, 1)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
