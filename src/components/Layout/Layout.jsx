import { PropTypes } from "prop-types";
import { ConfettiContainer } from "../Service";
import { Login } from "./Login";

import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <main
        className="tab-content p-5 h-100"
        style={{ minHeight: "100vh", width: "calc(100% - 300px)" }}
      >
        <div className="tab-pane fade show active">{children}</div>
      </main>

      <ConfettiContainer />
      {/* <EasterEgg /> */}
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
