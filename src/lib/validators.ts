// Validador de texto requerido
// Expresión regular para validar una CURP
const curpRegex = /^[A-Z]{4}\d{6}(H|M)([A-Z]{2})([A-Z]{3})[A-Z\d]{1}\d{1}$/;
// Expresión regular para validar un RFC con homoclave
const rfcRegex = /^([A-ZÑ&]{3,4})\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([A-Z\d]{2})([A\d])$/;

export const textRequired = (text: string) => {
  if (text === "") {
    return "Este campo es requerido";
  }
  return "";
};

// Validador de email válido
export const emailValid = (email: string) => {
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return "El email no es válido";
  }
  return "";
};

// Validador de longitud mínima
export const minLength = (text: string, length: number) => {
  if (text.length < length) {
    return `El campo debe tener al menos ${length} caracteres`;
  }
  return "";
};

// Validador de longitud máxima
export const maxLength = (text: string, length: number) => {
  if (text.length > length) {
    return `El campo no debe exceder ${length} caracteres`;
  }
  return "";
};

// Validador de solo números
export const onlyNumbers = (text: string) => {
  if (!/^\d+$/.test(text)) {
    return "Este campo solo debe contener números";
  }
  return "";
};

// Validador de rango de números
export const numberRange = (num: number, min: number, max: number) => {
  if (num < min || num > max) {
    return `El número debe estar entre ${min} y ${max}`;
  }
  return "";
};

// Validador de URL válida
export const urlValid = (url: string) => {
  const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
  if (!regex.test(url)) {
    return "La URL no es válida";
  }
  return "";
};

// Validador de coincidencia (por ejemplo, para confirmar contraseñas)
export const match = (value: string, compareValue: string) => {
  if (value !== compareValue) {
    return "Los valores no coinciden";
  }
  return "";
};

// validar que contenga .com
export const comValid = (url: string) => {
  if (!url.includes(".com")) {
    return "EL dominio debe contener .com";
  }
  return "";
};

//validar numero de telefono
export const phoneValid = (phoneNumber: string) => {
  if (phoneNumber.length < 12) {
    return "El número de teléfono debe tener 10 dígitos";
  }
  return "";
};

//tiene que ser true
export const checkedValid = (checked: boolean) => {
  if (!checked) {
    return "Este campo es requerido";
  }
  return "";
};

//Validar el cvc
export const cvcValid = (cvc: string) => {
  if (cvc.length < 3) {
    return "El cvc debe tener 3 dígitos";
  }
  return "";
};

export const expirationDateValid = (vencimiento: string) => {
  const [left, right] = vencimiento.split("/");
  //Cuando se ingresa primero el mes y luego el año
  if (parseInt(left) >= 1 && parseInt(left) <= 12) {
    if (parseInt(right) >= 22 && parseInt(right) <= 99) {
      return "";
    } else {
      return "Año inválido";
    }
  }
  //Cuando se ingresa primero el año y luego el mes
  else if (parseInt(right) >= 1 && parseInt(right) <= 12) {
    if (parseInt(left) >= 22 && parseInt(left) <= 99) {
      return "";
    } else {
      return "Año inválido";
    }
  }
  return "Formato inválido";
};
export const paymentCardValid = (cardNumber: string) => {
  if (cardNumber.length < 19) {
    return "La tarjeta debe tener 16 dígitos";
  }
  return "";
};

export const passwordValid = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(password);
  const hasLength = /.{8,}/.test(password);
  if (hasNumber && hasUpperCase && hasSpecialCharacter && hasLength) {
    return "";
  }
  return "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial";
};

export const matchPasswordvalid = (password: string, confirmPassword: string) => {
  console.log(password, confirmPassword);
  if (password === confirmPassword) {
    return "";
  }
  return "Las contraseñas no coinciden";
};

export const curpValid = (curp: string) => {
  if (curp.length !== 18) {
    return "La CURP debe tener 18 caracteres";
  } else if (!curpRegex.test(curp)) {
    return "La CURP no tiene un formato válido";
  }
  return "";
};

export const rfcValid = (rfc: string) => {
  if (rfc.length !== 13) {
    return "El RFC debe tener 13 caracteres";
  } else if (!rfcRegex.test(rfc)) {
    return "El RFC no tiene un formato válido";
  }
  return "";
};
