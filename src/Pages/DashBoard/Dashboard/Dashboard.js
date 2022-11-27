import React, { useContext, useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../Context/UserContext";
import Order from "../Order/Order";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-12-server-psi.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data));
  }, [user?.email]);

  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      {isAdmin ? (
        <>
          <p className="text-3xl font-bold">For Admin</p>
        </>
      ) : (
        <>
          {role.map((r) =>
            r.role === "seller" ? (
              <p className="text-3xl font-bold">For All Seller</p>
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
