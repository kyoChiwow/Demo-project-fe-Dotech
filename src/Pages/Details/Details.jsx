import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://user-api-v3.vercel.app/api/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false); // Data fetched successfully
      } catch (error) {
        setError(error.message);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchUserData();
  }, [id]);

  // Handle form submission to update the user
  const handleUpdateUser = async (e) => {
    e.preventDefault();

    // Get updated values from form fields
    const updatedUserData = {
      name: e.target.createName.value,
      email: e.target.createEmail.value,
      phone: e.target.createPhone.value,
      address: e.target.createAddress.value,
      role: e.target.createRole.value,
    };

    try {
      const response = await fetch(
        `https://user-api-v3.vercel.app/api/user/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      const updatedData = await response.json();
      Swal.fire({
        title: "Success!",
        text: "User has been updated.",
        icon: "success",
      });
      setUserData(updatedData);
    } catch (error) {
      alert(`Error updating user: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <header>
        <h1 className="font-bold text-3xl text-center mt-8">Edit User</h1>
      </header>

      <main className="flex justify-center items-center mt-8">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                defaultValue={userData.name}
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
                defaultValue={userData.email}
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
                defaultValue={userData.phone}
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
                defaultValue={userData.role}
                name="createRole"
              >
                <option disabled>Choose Your Role</option>
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
                defaultValue={userData.address}
                name="createAddress"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update User</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Details;
