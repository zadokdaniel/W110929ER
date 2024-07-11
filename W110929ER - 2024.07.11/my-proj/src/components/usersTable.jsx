import UsersTableRow from "./usersTableRow";

function UsersTable({ users }) {
  return (
    <table className="table table-striped table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th>name</th>
          <th>Status</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UsersTableRow
            key={user.objectId}
            user={user}
            rowNumber={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
