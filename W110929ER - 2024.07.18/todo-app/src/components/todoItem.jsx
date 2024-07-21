const NOOP = () => {};

function TodoItem({
  onClick = NOOP,
  onDelete = NOOP,
  todo: { id, text, isComplete, createdAt },
}) {
  return (
    <li
      onClick={() => onClick(id)}
      className={[
        `list-group-item d-flex justify-content-between align-items-start`,
        isComplete ? "text-decoration-line-through" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{text}</span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        className="btn btn-sm btn-danger"
      >
        <i className="bi bi-trash"></i>
      </span>
    </li>
  );
}

export default TodoItem;
