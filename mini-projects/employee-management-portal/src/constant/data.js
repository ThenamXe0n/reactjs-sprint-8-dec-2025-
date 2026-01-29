import pagePaths from "../router/pagePaths";

export const roles = ["employee", "admin", "executive", "BDE", "developers"];

export const adminTabOptions = [
  {
    name: "Add employee",
    icon: "➕",
    navigate: pagePaths.EMPLOYEE_MANAGEMENT,
  },
  {
    name: "Manage Tasks",
    icon: "🗂️",
    navigate: pagePaths.TASK_MANAGEMENT,
  },
  {
    name: "Permissions",
    icon: "🔐",
    navigate: pagePaths.ADMIN,
  }
];
