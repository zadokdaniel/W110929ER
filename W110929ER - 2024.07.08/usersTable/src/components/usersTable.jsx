import UsersTableRow from "./usersTableRow";

function UsersTable({ users }) {
  return (
    <table className="table table-striped table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <UsersTableRow key={user.objectId} rowNumber={i + 1} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
