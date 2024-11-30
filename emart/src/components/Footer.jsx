// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#e2e8f0", // bg-slate-200
        color: "#1f2937",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* About Section */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1f2937" }}>
            About Us
          </h3>
          <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "10px" }}>
            We are committed to delivering the best online shopping experience.
            Stay connected with us for the latest updates and exclusive offers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1f2937" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link} style={{ marginBottom: "8px" }}>
                <a
                  href="/#"
                  style={{
                    textDecoration: "none",
                    color: "#1f2937",
                    fontSize: "14px",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#cc0000")}
                  onMouseOut={(e) => (e.target.style.color = "#1f2937")}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1f2937" }}>
            Contact Us
          </h3>
          <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "10px" }}>
            Email: support@yourcompany.com
          </p>
          <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "10px" }}>
            Phone: +1 (800) 123-4567
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="/#"
                style={{
                  fontSize: "20px",
                  color: "#1f2937",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#cc0000")}
                onMouseOut={(e) => (e.target.style.color = "#1f2937")}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#1f2937" }}>
            Newsletter
          </h3>
          <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "10px" }}>
            Subscribe to our newsletter for updates on new products and offers.
          </p>
          <form style={{ display: "flex", marginTop: "10px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: "1",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px 0 0 4px",
                outline: "none",
                fontSize: "14px",
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#1f2937",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "0 4px 4px 0",
                cursor: "pointer",
                fontSize: "14px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4b5563")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1f2937")}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#4b5563",
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
        }}
      >
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
