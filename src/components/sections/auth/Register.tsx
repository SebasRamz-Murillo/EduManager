import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [form, setForm] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    console.log(form);

    // navigate("/home");
  };
  return (
    <section className="flex h-screen w-full items-center justify-center sm:px-5 lg:px-0">
      <div className="flex h-[500px] w-[600px] flex-col gap-5 rounded-xl border p-5 text-center shadow-shadows-lg">
        <img src="src/assets/EduManagerLogo.jpeg" alt="EduManager" />
        <h1 className="text-3xl font-bold">Registrarse</h1>
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth={true}
          name="email"
          value={form.email}
          onChange={handleChange}
          sx={{
            "& label.Mui-focused": { color: "purple" },
            "& .MuiInput-underline:after": { borderBottomColor: "purple" },
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth={true}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          sx={{
            "& label.Mui-focused": { color: "purple" },
            "& .MuiInput-underline:after": { borderBottomColor: "purple" },
          }}
        />
        <button
          onClick={handleLogin}
          className="mt-4 h-[44px] w-full rounded-xl bg-purple-500 p-2 text-white"
        >
          Iniciar sesión
        </button>
        <div>
          <Link to="/register" className="mt-5 text-purple-500">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </section>
  );
}
