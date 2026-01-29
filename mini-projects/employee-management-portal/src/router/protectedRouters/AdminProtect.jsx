import { Navigate } from "react-router";
import pagePaths from "../pagePaths";

import AdminNavBar from "../../components/AdminNavBar";

function AdminProtected({ children }) {
  // const navigate = useNavigate();
  let isLoggedIn = sessionStorage.getItem("isLoggedIn");
  let detailsOfUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  // if (!isLoggedIn) {
  //   navigate(pagePaths.LOGIN);
  //   toast.error("logIn to access this page");
  //   return <>access denied</>;
  // }
  return (
    <div>
      {isLoggedIn === "$logyesUser" && detailsOfUser.role === "admin" ? (
        <div>
          
          <main> {children}</main>
        </div>
      ) : (
        <Navigate to={pagePaths.HOME} />
      )}
    </div>
  );
}

export default AdminProtected;
