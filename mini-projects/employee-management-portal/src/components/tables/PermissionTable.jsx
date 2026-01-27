import React from "react";

function PermissionTable() {
  const userList = JSON.parse(localStorage.getItem("userData")) || [];
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
  console.log("userList", typeof userList);

  const filteredUser = userList.filter((item) => {
    return item.email !== loggedInUser.email;
  });



  function handleApproveUser(id) {
    let userListToUpdate = [...filteredUser, loggedInUser];
    filteredUser[id].isApproved =  !filteredUser[id].isApproved;
    console.log("user to approve", filteredUser);
    console.log("updated user", userListToUpdate);
    localStorage.setItem("userData", JSON.stringify(userListToUpdate));
    window.location.reload();
  }

  return (
    <div className="w-11/12 my-6 mx-auto">
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-blue-800 text-white capitalize">
            <th className="py-3 border">sr no</th>
            <th className="py-3 border">user name</th>
            <th className="py-3 border">email</th>
            <th className="py-3 border">role</th>
            <th className="py-3 border">approval status</th>
            <th className="py-3 border">action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userList) && userList.length > 0 ? (
            filteredUser.map((user, userIndex) => (
              <tr
                key={userIndex}
                className="bg-blue-800/30 text-black capitalize"
              >
                <td className="py-1 text-center border">{userIndex + 1}</td>
                <td className="py-1 text-center border">{user.name}</td>
                <td className="py-1 text-center border">{user.email}</td>
                <td className="py-1 text-center border">{user.role}</td>
                <td className="py-1 text-center border">
                  {user.isApproved ? "Approved" : "pending"}
                </td>
                <td className="py-1 text-center border">
                  <button
                    onClick={() => {
                      handleApproveUser(userIndex);
                    }}
                  >
                    ✅
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-blue-800/30 text-black capitalize">
              <td className="py-1 text-center border" colSpan={6}>
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionTable;
