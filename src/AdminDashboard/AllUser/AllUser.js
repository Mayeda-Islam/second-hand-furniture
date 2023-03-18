import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-nine-virid.vercel.app/users`
      );
      const data = await res.json();
      console.log("inside", data);
      return data;
    },
  });
  const handleRoleUpdate = (user, role) => {
    fetch(
      `https://assignment-12-server-nine-virid.vercel.app/users/role/${user._id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          role: role,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin make successful");
          refetch();
        } else {
          toast.error("Forbidden Access");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Current role</th>
              <th>Manage roles</th>
              <th>delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{i + 1}</th>

                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <>
                      <button onClick={() => handleRoleUpdate(user, "seller")}>
                        make seller
                      </button>{" "}
                      |{" "}
                      <button onClick={() => handleRoleUpdate(user, "buyer")}>
                        make buyer
                      </button>
                    </>
                  ) : null}
                  {user.role === "seller" ? (
                    <>
                      <button onClick={() => handleRoleUpdate(user, "admin")}>
                        make admin
                      </button>{" "}
                      |{" "}
                      <button onClick={() => handleRoleUpdate(user, "buyer")}>
                        make buyer
                      </button>
                    </>
                  ) : null}
                  {user.role === "buyer" ? (
                    <>
                      <button onClick={() => handleRoleUpdate(user, "admin")}>
                        make admin
                      </button>{" "}
                      |{" "}
                      <button onClick={() => handleRoleUpdate(user, "seller")}>
                        make seller
                      </button>
                    </>
                  ) : null}
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
