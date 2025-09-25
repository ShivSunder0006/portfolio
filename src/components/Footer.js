import React from "react";
import "../styles/App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
