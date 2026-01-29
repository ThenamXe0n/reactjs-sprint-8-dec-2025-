import React, { useContext } from 'react'
import StoreContext from '../../contextApi/storeContext';

function EmployeeDetailsTable() {
  const {filteredEmployeeList} =useContext(StoreContext)

  return (
    <div className='flex-1'>
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
          {Array.isArray(filteredEmployeeList) && filteredEmployeeList.length > 0 ? (
            filteredEmployeeList.map((user, userIndex) => (
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
                     console.log("handle action");
                    }}
                  >
                    {!user.isApproved ? "✅" : "❌"}
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
  )
}

export default EmployeeDetailsTable