const url = "https://back-restaurante-alforno-production.up.railway.app";

const registerUser = async (usuario, password) => {
  const payload = { usuario, password };

  try {
    const res = await fetch(`${url}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (res.ok) {
      return data; // devuelve info útil del backend
    } else {
      throw new Error(data.message || "Error en el registro");
    }
  } catch (error) {
    throw new Error("Fallo de red o servidor: " + error.message);
  }
};

export default registerUser;
