import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../Firebase/firebase.config';

const Users = () => {
  const { userDelete } = useContext(AuthContext);
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  const handleDelete = (id, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        title: "sub-heading",
        htmlContainer: "sub-heading",
        confirmButton: "sub-heading",
        cancelButton: "sub-heading"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
                customClass: {
                  title: "sub-heading",
                  htmlContainer: "sub-heading"
                }
              });

              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);

              // ✅ Only attempt Firebase deletion if it's the logged-in user
              if (auth.currentUser?.email === email) {
                userDelete()
                  .then(() => {
                    console.log("Firebase user deleted");
                  })
                  .catch((error) => {
                    console.error("Firebase user deletion failed", error);
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Failed to delete Firebase user.",
                    });
                  });
              }
            }
          });
      }
    });
  };

  return (
    <div className='w-11/12 mx-auto border border-gray-200 my-20 p-10'>
      <h1 className='text-2xl mb-10 sub-heading'>Total Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="sub-heading">No.</th>
              <th className="sub-heading">Name</th>
              <th className="sub-heading">Phone</th>
              <th className="sub-heading">Email</th>
              <th className="sub-heading">Action</th>
            </tr>
          </thead>
          {
            users.map((user, index) => (
              <tbody key={user._id}>
                <tr>
                  <th className="sub-heading">{index + 1}</th>
                  <td className="sub-heading">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.photo} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold sub-heading">{user.name}</div>
                        <div className="text-sm opacity-50 sub-heading">{user.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="sub-heading">{user.phone}</td>
                  <td className="sub-heading">{user.email}</td>
                  <th className="sub-heading">
                    <button className="btn btn-ghost btn-xs sub-heading">View</button>
                    <button className="btn btn-ghost btn-xs sub-heading">Edit</button>
                    <button
                      onClick={() => handleDelete(user._id, user.email)}
                      className="btn btn-ghost btn-xs sub-heading"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Users;
