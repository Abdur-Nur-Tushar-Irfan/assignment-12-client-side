import React, { useContext, useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../Context/UserContext";
import Order from "../Order/Order";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data));
  }, [user?.email]);

  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      {isAdmin ? (
        <>
          <p>This is admin</p>
        </>
      ) : (
        <>
          {role.map((r) =>
            r.role === "seller" ? (
              <>This is seller</>
            ) : (
              <>
                <Order></Order>
              </>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
