"use client";

import { useState } from "react";
import ValidatePassword from "./ValidatePassword";
import { CircularProgress, TextField } from "@mui/material";
import { emailValid, textRequired } from "../../lib/validators";
import LabelErrorTerminal from "./LabelErrorTerminal";
import AlertMui from "./AlertMui";

export default function RightSideLogin(props: any) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [passwordValid, setpasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    status: "",
  });

  const [rulesValidation, setRulesValidation] = useState([
    {
      wordUpper: false,
      number: false,
      specialCharacter: false,
      length: false,
    },
  ]);
  const validators: { [key: string]: Array<(value: string) => string | void> } =
    {
      email: [emailValid],
      password: [
        textRequired,
        (value: string) => {
          validatePassword(value);
          return "";
        },
      ],
    };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    // Actualiza el estado del formulario
    setForm((prevState: any) => ({ ...prevState, [name]: value }));
    // Si hay validadores para este campo, ejecútalos todos
    if (validators[name]) {
      const errorMessages = validators[name]
        .map((validator) => validator(value))
        .filter((errorMessage) => errorMessage !== ""); // Filtra solo los errores

      // Si hay errores, los añadimos al estado de errores, si no, limpiamos
      setFormError((prevErrors: any) => ({
        ...prevErrors,
        [name]: errorMessages[0] || "", // Solo tomamos el primer error
      }));
    }
  };

  const handleLogin = async () => {};

  const validatePassword = (value: string) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(value);
    const hasLength = /.{8,}/.test(value);
    setRulesValidation([
      {
        wordUpper: hasUpperCase,
        number: hasNumber,
        specialCharacter: hasSpecialCharacter,
        length: hasLength,
      },
    ]);
    if (hasNumber && hasUpperCase && hasSpecialCharacter && hasLength) {
      setpasswordValid(false);
    } else {
      setpasswordValid(true);
    }
  };
  return (
    <>
      <section
        className={`flex items-center justify-center text-gray-70 sm:p-[16px]`}
      >
        <div className="flex h-[502px] flex-col items-start sm:w-full md:w-[500px] lg:w-[360px]">
          <h2 className={`text-[30px] font-bold text-primary-40`}>
            Iniciar Sesión
          </h2>
          <p>Nos encanta que estemos trabajando juntos 😁</p>
          <form action="" className="w-full pt-[20px]">
            <div className="mt-6 h-[70px]">
              <TextField
                error={false}
                name="email"
                size="small"
                type="email"
                fullWidth={true}
                label="Ingresa tu correo electronico"
                variant="standard"
                onChange={handleOnChange}
              />
              <LabelErrorTerminal text={formError.email} />
            </div>
            <div className="h-[70px] pb-[3px]">
              <TextField
                variant="standard"
                label={"Contraseña"}
                fullWidth={true}
                type="password"
                name="password"
                value={form.password}
                onChange={handleOnChange}
              />
              <LabelErrorTerminal text={formError.password} />
            </div>
            <ValidatePassword
              password={form.password}
              passwordValid={passwordValid}
              rulesPassword={rulesValidation}
            />
            <div className="pt-[24px]">
              <button className="h-[44px] w-full rounded-[24px] bg-purple-500 text-white">
                {loading ? (
                  <CircularProgress size={24} color="secondary" />
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <AlertMui
        description={response.message}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        type={response.status as "success" | "error" | "info" | "warning"}
        title=""
      />
    </>
  );
}
