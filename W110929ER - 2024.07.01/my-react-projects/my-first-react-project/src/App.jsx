import React from "react";
import "./App.css";

// function User(props) {
//   console.log(props);
//   return (
//     <ul>
//       <li>
//         <span style={{ fontWeight: "bold" }}>Name</span>{" "}
//         <span>{props.name}</span>
//       </li>
//     </ul>
//   );
// }

// function App() {
//   const name = "daniel";

//   return (
//     <div>
//       <h1>hello from my app</h1>
//       <h2>this is the resutl of 1 + 1 = {1 + 1}</h2>
//       <User name="daniel" />
//       <User name="shalom" />
//       <User name={name} />
//       <User />
//       <User />
//     </div>
//   );
// }

function Product({ title, description, image, price }) {
  return (
    <div>
      <h1 style={{ color: "green" }}>{title}</h1>
      <p>{description}</p>
      <img style={{ width: 150 }} src={image} alt={title} />
      <p>{price}$</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Product
        title="shampoo"
        description="the best shampoo ever"
        image="https://bollyjon.co.il/image/cache/catalog/Color-Therapy/Photo%2031-10-2022,%201%2045%2007%20(1)-1000x1000.jpg"
        price={55}
      />
      <Product
        title="iphone"
        description="the best iphone ever"
        image="https://d3m9l0v76dty0.cloudfront.net/system/photos/13063026/large/4ad9e483298901c9c7feea1108605b91.jpg"
        price={6680}
      />
    </div>
  );
}

export default App;
