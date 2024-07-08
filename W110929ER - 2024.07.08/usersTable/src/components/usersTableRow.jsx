function UsersTableRow({
  rowNumber,
  user: {
    status,
    name: { first: firstName, last: lastName },
    username,
    emails,
    phoneNumber,
    location: { street, city, state, country },
    website,
    job: { title, company },
    objectId,
  },
}) {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>
        {firstName} {lastName}
      </td>
      <td>{username}</td>
      <td>{emails}</td>
      <td>
        <ul>
          {phoneNumber.map((phoneNumber) => (
            <li key={phoneNumber}>{phoneNumber}</li>
          ))}
        </ul>
      </td>
      <td>
        {country}, {state}, {city}, {street}
      </td>
    </tr>
  );
}

export default UsersTableRow;
