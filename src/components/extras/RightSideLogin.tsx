/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import ValidatePassword from "./ValidatePassword";
import { CircularProgress, TextField } from "@mui/material";
import { emailValid, textRequired } from "../../lib/validators";
import LabelErrorTerminal from "./LabelErrorTerminal";
import AlertMui from "./AlertMui";
import { useNavigate } from "react-router-dom";
import { ProfesorsArray1 } from "../../lib/DataJson/Profesors";

export default function RightSideLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [passwordValid, setPasswordValid] = useState(false);
  const [loading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [response] = useState({
    message: "",
    status: "",
  });

  const [rulesValidation, setRulesValidation] = useState({
    wordUpper: false,
    number: false,
    specialCharacter: false,
    length: false,
  });

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

  // Verifica si el formulario es válido para habilitar el botón
  useEffect(() => {
    if (
      rulesValidation.length &&
      rulesValidation.number &&
      rulesValidation.specialCharacter &&
      rulesValidation.wordUpper
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formError.email, rulesValidation]);

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

  const handleLogin = async () => {
    if (
      form.password === ProfesorsArray1[0].password &&
      form.email === ProfesorsArray1[0].email
    ) {
      setTimeout(() => {
        navigate("/panel/home");
      }, 1000);
      return;
    } else {
      navigate("/");
    }
    // Aquí manejarías la lógica del login
  };

  const validatePassword = (value: string) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(value);
    const hasLength = /.{8,}/.test(value);

    setRulesValidation({
      wordUpper: hasUpperCase,
      number: hasNumber,
      specialCharacter: hasSpecialCharacter,
      length: hasLength,
    });

    if (hasNumber && hasUpperCase && hasSpecialCharacter && hasLength) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <>
      <section
        className={`flex items-center justify-center text-gray-70 sm:p-[16px]`}
      >
        <div className="flex h-[502px] flex-col items-start rounded-lg px-10 shadow-shadows-md sm:w-full md:w-[500px] lg:w-[360px]">
          <h2 className={`text-primary-40 text-[30px] font-bold`}>
            Iniciar Sesión
          </h2>
          <p>Nos encanta que estemos trabajando juntos 😁</p>
          <section className="w-full pt-[20px]">
            <div className="mt-6 h-[70px]">
              <TextField
                error={!!formError.email}
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
              rulesPassword={[rulesValidation]}
            />
            <div className="pt-[24px]">
              <button
                className={`h-[44px] w-full rounded-[24px] bg-purple-500 text-white ${
                  buttonDisabled ? "opacity-60" : "opacity-100"
                }`}
                disabled={buttonDisabled}
                onClick={handleLogin}
              >
                {loading ? (
                  <CircularProgress size={24} color="secondary" />
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </div>
          </section>
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
