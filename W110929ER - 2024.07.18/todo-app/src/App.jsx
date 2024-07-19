import "./App.css";

function App() {
  return (
    <div className="container-md mt-3 todo">
      <div className="row form">
        <div className="input-group mb-3">
          <span className="input-group-text">I need to</span>
          <input type="text" className="form-control" placeholder="Buy Milk" />
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>
      <div className="list">
        <div className="status">6/15</div>

        <div className="p-4 my-3 bg-body-tertiary rounded-3">
          <div className="display-4">Good Job!</div>
          <div>You are all done go to the beach 🏖️</div>
        </div>

        <div className="items mt-3">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <span>Organize Drawer</span>
              <span className="btn btn-sm btn-danger">
                <i className="bi bi-trash"></i>
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start text-decoration-line-through">
              <span>Organize Drawer</span>
              <span className="btn btn-sm btn-danger">
                <i className="bi bi-trash"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
