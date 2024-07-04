function UsersTableRow({ user: { name, email, address, bio, nickname } = {} }) {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{bio}</td>
      <td>{nickname}</td>
    </tr>
  );
}

export default UsersTableRow;
