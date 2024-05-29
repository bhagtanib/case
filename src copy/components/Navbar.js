import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div
      className="navbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 5%",
        zIndex: "1"
      }}
    >
      <div className="nav-left" style={{ margin: "" }}>
        {/* <a
          href="mailto:b.bhagtani10@gmail.com"
          style={{
            color: "black",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {" "}
          b.bhagtani10@gmail.com
        </a> */}
      </div>
      <div className="nav-right">
        <MenuIcon
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
