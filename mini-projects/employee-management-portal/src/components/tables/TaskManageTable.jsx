import { useContext } from "react";
import StoreContext from "../../contextApi/storeContext";

function TaskManageTable() {
  const { taskList } = useContext(StoreContext);
  console.log("taskList", taskList);

  let headerList = Object.keys(taskList[0])

  return (
    <table className="border-collapse w-full col-span-3">
      <thead>
        <tr className="bg-blue-800 text-white capitalize">
          {headerList.map((heading,idx) => (
            <th className="py-3 border" key={idx}>{heading}</th>
          ))}
          {/* <th className="py-3 border">user name</th>
          <th className="py-3 border">email</th>
          <th className="py-3 border">role</th>
          <th className="py-3 border">approval status</th>
          <th className="py-3 border">action</th> */}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(taskList) && taskList.length > 0 ? (
          taskList.map((task, userIndex) => (
            <tr
              key={userIndex}
              className="bg-blue-800/30 text-black capitalize"
            >
             {headerList.map((heading,idx)=>(
                <td className="py-1 text-center border" key={idx}>{task[heading]}</td>
             ))}
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
  );
}

export default TaskManageTable;
