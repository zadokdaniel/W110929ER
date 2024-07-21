function TodoForm() {
  return (
    <div className="row form">
      <div className="input-group mb-3">
        <span className="input-group-text">I need to</span>
        <input type="text" className="form-control" placeholder="Buy Milk" />
        <button className="btn btn-primary" type="button">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
