import "./App.css";

import usersData from "../data/users";

function App() {
  const colors = ["red", "blue", "green"];

  return (
    <div>
      {colors.map((color, i) => (
        <div
          key={color}
          style={{ color: "white", fontWeight: "bold", backgroundColor: color }}
        >
          {i + 1}. {color}
        </div>
      ))}

      {[<h1 key={1}>hello</h1>, <h2 key={2}>hello</h2>]}

      <ol>
        {usersData.map((user) => (
          <li key={user.objectId}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
