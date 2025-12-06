const fetchWithToken = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token no encontrado");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };
  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error ${res.status}:${errorText}`);
  }
  return await res.json();
};

export default fetchWithToken;
