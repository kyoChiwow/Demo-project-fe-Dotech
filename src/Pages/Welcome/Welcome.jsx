import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <header className="text-center font-bold mt-8">
        <h1>Hello</h1>
        <p>Welcome to User API, Click Below to Create User</p>
      </header>

      <main className="flex justify-center mt-8">
        <Link to={"/createUser"}>
          <button className="btn">Create User</button>
        </Link>
      </main>
    </div>
  );
};

export default Welcome;
