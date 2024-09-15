import IconValid from "./IconValid";
import IconInvalid from "./IconInvalid";
export default function ValidatePassword(props: {
  password: string;
  passwordValid: boolean;
  rulesPassword: {
    wordUpper: boolean;
    number: boolean;
    specialCharacter: boolean;
    length: boolean;
  }[];
}) {
  return (
    <section className="flex flex-col">
      {props.rulesPassword.map((rule, index) => (
        <div key={index} className="items-center gap-[8px]">
          <div className="flex items-center">
            {rule.wordUpper ? <IconValid /> : <IconInvalid />}
            <h3 className="pl-[8px]">Letra mayúscula</h3>
          </div>
          <div className="flex items-center">
            {rule.number ? <IconValid /> : <IconInvalid />}
            <h3 className="pl-[8px]">Al menos un número</h3>
          </div>
          <div className="flex items-center">
            {rule.specialCharacter ? <IconValid /> : <IconInvalid />}
            <h3 className="pl-[8px]">Caracter especial</h3>
          </div>
          <div className="flex items-center">
            {rule.length ? <IconValid /> : <IconInvalid />}
            <h3 className="pl-[8px]">Mínimo 8 caracteres</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
