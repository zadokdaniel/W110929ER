function TodoItem() {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start text-decoration-line-through">
      <span>Organize Drawer</span>
      <span className="btn btn-sm btn-danger">
        <i className="bi bi-trash"></i>
      </span>
    </li>
  );
}

export default TodoItem;
