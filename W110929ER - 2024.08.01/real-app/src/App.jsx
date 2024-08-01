import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="app min-vh-100 d-flex flex-column gap-2">
      <Header />
      <main className="flex-fill">MAIN</main>
      <Footer />
    </div>
  );
}

export default App;
