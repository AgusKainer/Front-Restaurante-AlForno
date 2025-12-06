const loginAdmin = async (usuario, password) => {
  const payload = { usuario, password }; // ✅ objeto plano
  console.log("Payload:", payload); // Verificá que sea { usuario: "admin", password: "1234" }

  const res = await fetch("http://localhost:1000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload), // ✅ esto no debería fallar
  });

  const data = await res.json();
  if (res.ok && data.token) {
    localStorage.setItem("token", data.token);
    return true;
  } else {
    throw new Error("Credenciales inválidas");
  }
};

export default loginAdmin;
