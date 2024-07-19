import { useState } from "react";

function useForm({ initialValues }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) =>
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));

  const reset = () => {
    setForm(initialValues);
  };

  return [form, { handleChange, reset }];
}

function List() {
  const [form, { handleChange }] = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });

  const [list, setList] = useState([]);

  const add = (user) => {
    setList((list) => [
      ...list,
      { id: crypto.randomUUID(), ...user, selected: false },
    ]);
  };

  const remove = (id) => {
    setList((list) => list.filter((user) => user.id !== id));
  };

  const update = (id) => {
    setList((list) =>
      list.map((user) => {
        if (user.id !== id) {
          return user;
        }

        return { ...user, selected: !user.selected };
      })
    );
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">Name</span>
        <input
          value={form.name}
          onChange={handleChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Daniel"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input
          value={form.email}
          onChange={handleChange}
          name="email"
          type="text"
          className="form-control"
          placeholder="z@gmail.com"
        />
      </div>
      <button onClick={() => add(form)} className="btn btn-primary">
        add
      </button>

      <div>
        {list.map((user) => (
          <div key={user.id}>
            <pre onClick={() => update(user.id)}>
              {JSON.stringify(user, null, 2)}
            </pre>

            <i onClick={() => remove(user.id)} className="bi bi-trash"></i>
          </div>
        ))}

        <Form onSubmit={() => {}} />
      </div>
    </div>
  );
}

export default List;
