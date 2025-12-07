import useFormHook from "../customHooks/customForm";
import registerUser from "../customHooks/register";

const RegisterUser = () => {
  const formInitial = {
    usuario: "",
    password: "",
  };
  const { form, onChange } = useFormHook(formInitial);
  const { usuario, password } = form;
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await registerUser(usuario, password);
      if (success) {
        console.log(usuario, password);

        console.log("✅ Registrado correctamente");
      }
    } catch (error) {
      console.log("❌ No se puede registrar ", error.message);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="flex flex-col justify-center px-6 py-12 rounded-xl shadow-lg max-w-sm w-full isolate">
          <div className="mx-auto w-full max-w-sm text-center">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-white">
              Registrarse
            </h2>
          </div>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="usuario"
                className="block text-sm font-medium text-gray-100"
              >
                Usuario
              </label>
              <input
                value={usuario}
                onChange={onChange}
                id="usuario"
                name="usuario"
                type="text"
                required
                autoComplete="usuario"
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-100"
              >
                Contraseña
              </label>
              <input
                value={password}
                onChange={onChange}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
