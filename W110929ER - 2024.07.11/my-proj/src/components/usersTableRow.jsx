import UsersTablePhonesCell from "./usersTablePhonesCell";

function UsersTableRow({
  rowNumber,
  user: { status, name, username, email, phoneNumbers, location },
}) {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>
        {name.first} {name.last}
      </td>
      <td>{status === "active" ? "🟢" : "🔴"}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <UsersTablePhonesCell phones={phoneNumbers} />
      </td>
      <td>
        {location.country}, {location.state}, {location.city}, {location.street}
      </td>
    </tr>
  );
}

export default UsersTableRow;
