import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer style={{ backgroundColor: "#a6a5a5", color: "black", textAlign: "center" }}>
      <div>
        {/* Customize your footer content here */}
        <p style={{ margin: 0 }}>
          Copyright &copy; {currentYear} by Zkart | All Rights Reserved
        </p>
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Link href="/AboutUsPrivacyPolicyPage">
            <a style={{ color: "black", textDecoration: "underline" }}>About Us</a>
          </Link>{" "}
          |{" "}
          <Link href="/AboutUsPrivacyPolicyPage">
            <a style={{ color: "black", textDecoration: "underline" }}>Privacy Policy</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
