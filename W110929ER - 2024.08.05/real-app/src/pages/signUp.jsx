import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";

function SignUp() {
  return (
    <div className="container">
      <PageHeader
        title="Sign Up"
        description="Open a new account now!!! It is free you cheap monkey!"
      />

      <form>
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="John Doe"
          required
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="john@doe.com"
          required
        />
        <Input type="password" name="password" label="Password" required />

        <div className="my-2">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
