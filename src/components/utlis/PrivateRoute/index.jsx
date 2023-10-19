import React from "react";
import { Navigate } from "react-router-dom";
import BottomNav from "../../pageLayout/BottomNav";
import TopBar from "../../pageLayout/TopBar";

export default function PrivateRoute({ children }) {
  // const logged = useSelector((state) => state.auth.isLoggedIn);
  const logged = true;

  if (logged) {
    return (
      <div className="h-screen flex flex-col">
        <div className="min-h-[8vh] overflow-hidden">
          <TopBar />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
        <div className="min-h-[8vh] overflow-hidden">
          <BottomNav />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}
