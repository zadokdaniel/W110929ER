import users from "../data/users";
import UsersTable from "./usersTable";

function Users() {
  if (!users.length) {
    return (
      <div className="m-5 bg-dark rounded-4 text-white fw-bold p-5 text-center">
        No users yet, please try later...
      </div>
    );
  }

  return <UsersTable users={users} />;
}

export default Users;
