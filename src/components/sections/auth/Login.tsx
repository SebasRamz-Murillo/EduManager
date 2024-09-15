import { Input, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import CarruselLogin from "../../extras/CarruselLogin";
import RightSideLogin from "../../extras/RightSideLogin";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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
    <main className="sm:flex sm:h-[280px] sm:flex-col lg:grid lg:h-screen lg:grid-cols-2">
      <CarruselLogin />
      <RightSideLogin />
    </main>
  );
}
