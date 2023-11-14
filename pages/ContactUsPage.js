// ContactUsPage.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or inquiries, feel free to contact us using
          the information below.
        </p>
        <p>Email: zkartsupport@gmail.com</p>
        <p>Phone: +91 7979652380</p>

        {/* Additional text */}
        <p>
          Our customer support team is available 24/7 to assist you with any
          issues or concerns you may have.
        </p>
      </div>

      {/* Services Section */}
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          textAlign: "center",
          border: "1px solid #ccc",
          margin: "20px",
        }}
      >
        <h2>Our Services</h2>

        {/* Technical Support */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#d9d9d9",
          }}
        >
          <h3>Technical Support</h3>
          <p>
            Our technical support team is dedicated to resolving any technical
            issues you may encounter with our products or services.
          </p>
        </div>

        {/* Customer Service */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#d9d9d9",
          }}
        >
          <h3>Customer Service</h3>
          <p>
            Our customer service representatives are here to assist you with
            any questions or concerns related to your shopping experience.
          </p>
        </div>

        {/* Data Analytics */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#d9d9d9",
          }}
        >
          <h3>Data Analytics</h3>
          <p>
            Our data analytics team works tirelessly to analyze and improve our
            services based on customer feedback and market trends.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
