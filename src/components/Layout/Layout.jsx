import { PropTypes } from "prop-types";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { ConfettiContainer } from "../Service";

import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <main
        className="tab-content p-5 h-100"
        style={{ minHeight: "100vh", width: "calc(100% - 300px)" }}
      >
        <div className="tab-pane fade show active">
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>

      <ConfettiContainer />
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
