import React from "react";

const LoginPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    
    }}>
      <div style={{
        background: "rgba(0,0,0,0.85)",
        padding: "40px 32px",
        borderRadius: "16px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "350px"
      }}>
        <h2 style={{ color: "#fff", marginBottom: 24, textAlign: "center" }}>Нэвтрэх</h2>
        <form>
          <input
            type="email"
            placeholder="Имэйл"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#222",
              color: "#fff"
            }}
          />
          <input
            type="password"
            placeholder="Нууц үг"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "24px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#222",
              color: "#fff"
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Нэвтрэх
          </button>
        </form>
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a href="/register" style={{ color: "#4fc3f7", textDecoration: "underline" }}>
            Бүртгүүлэх
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
