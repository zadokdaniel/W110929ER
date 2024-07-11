function UsersTablePhonesCell({ phones }) {
  if (!phones.length) {
    return <span className="fst-italic">No phones..</span>;
  }

  if (phones.length === 1) {
    return phones[0];
  }

  return (
    <ul>
      {phones.map((phone) => (
        <li key={phone}>{phone}</li>
      ))}
    </ul>
  );
}

export default UsersTablePhonesCell;
