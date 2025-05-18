'use client'

import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        color: "#fff",
        padding: "15px 30px",
        borderBottom: "1px solid #333",
      }}
    >
      {/* Зүүн талын Logo + F8 */}
      <div 
        style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        <img src="/assets/logo.png" alt="F8" style={{ height: "60px" }} />
      
      </div>

      {/* Нэвтрэх товч */}
      <button
        onClick={() => router.push("/login")}
        style={{
          padding: "8px 16px",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "20px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        Нэвтрэх
      </button>
    </div>
  );
}

export default Navbar