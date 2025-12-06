import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/alforno.png')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="bg-black/70 p-8 rounded-xl shadow-lg max-w-2xl w-full text-center">
        {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          El Rancho de <br /> Al Forno
        </h1> */}
        <p className="text-lg sm:text-xl mb-4">
          🔥 Restaurante Pizza a la piedra 🍕⚡
        </p>
        <p className="text-base mb-2">
          Horarios: Martes a Jueves de 20:00 hs. a 00hs. <br />
          Viernes a Domingos 20:00hs. a 1:30hs.
        </p>
        <p className="text-base mb-6">
          Pedidos y reservas 📞{" "}
          <span className="font-semibold">3756-458989</span> 📍 Av Lavalle 2623
        </p>
        <Link
          to="postreserva"
          className="inline-block rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-red-500 transition duration-200"
        >
          Haz una reserva
        </Link>
        {/* <h2 className="text-lg font-semibold mt-12">Seguinos en Instagram</h2> */}
        <div className="mt-6 flex justify-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/elranchodealforno/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="/assets/images/instagram.jpeg"
              alt="Instagram"
              className="h-12 w-12 rounded-full shadow-lg"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5493756458989"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="/assets/images/whatsapp_icon.png"
              alt="WhatsApp"
              className="h-12 w-12 rounded-full shadow-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
