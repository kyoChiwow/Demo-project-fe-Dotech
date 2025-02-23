import Swal from "sweetalert2";

const CreateUser = () => {
  const handleCreateUser = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.createName.value;
    const email = form.createEmail.value;
    const phone = form.createPhone.value;
    const address = form.createAddress.value;
    const role = form.createRole.value;

    const userData = {
      name,
      email,
      phone,
      address,
      role,
    };

    try {
      const response = await fetch("https://user-api-v3.vercel.app/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("User created successfully", responseData);
        // Optionally show a success alert
        Swal.fire({
          title: "Success!",
          text: "User has been created.",
          icon: "success",
        });
      } else {
        const errorData = await response.json();
        console.error("Error creating user:", errorData);
        // Optionally show an error alert
        Swal.fire({
          title: "Error",
          text: "Something went wrong while creating the user.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      // Optionally show an error alert
      Swal.fire({
        title: "Network Error",
        text: "There was a problem with the network.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <header>
        <h1 className="font-bold text-3xl text-center mt-8">
          Create User Here
        </h1>
      </header>

      <main className="flex justify-center items-center mt-8">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="createName"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                name="createEmail"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Phone</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="input input-bordered"
                name="createPhone"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Role</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="createRole"
              >
                <option disabled selected>
                  Choose Your Role
                </option>
                <option>Admin</option>
                <option>General User</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered"
                name="createAddress"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create User</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateUser;
