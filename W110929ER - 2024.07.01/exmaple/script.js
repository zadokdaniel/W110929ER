const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());

console.log(App());

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "hello from my app"),
    React.createElement(
      "p",
      {
        id: "a",
        className: "b ",
        style: { backgroundColor: "red", color: "white" },
      },
      "lorem impsum shmipsum"
    ),
    React.createElement(Product, { title: "product 1", price: 51 }),
    React.createElement(Product, { title: "product 2" }),
    React.createElement(Product),
    React.createElement(Product)
  );
}

function Product({ title, price }) {
  return React.createElement(
    "div",
    { className: "product" },
    React.createElement("h2", null, title)
  );
}

// function createElement(type, props, ...children) {
//   return {
//     type,
//     props: { ...props, children },
//   };
// }

// console.log(createElement("h1", { a: 5, children: ["a", "b"] }));
