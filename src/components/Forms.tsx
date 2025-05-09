import { FaRegEyeSlash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validatePassword, setValidatePassword] = useState({
    hasMinimumLength: false,
    hasSpecialChar: false,
    hasUpperCase: false,
    hasEqualPassword: false
  });
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = () => {
    const hasMinimumLength = password.length > 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasEqualPassword = password === confirmPassword && password.length > 0;
    setValidatePassword({hasMinimumLength, hasSpecialChar, hasUpperCase,  hasEqualPassword});
  };

  const rules = [
    {
      label: "Pelo menos 1 caractere especial (como ! @ # $ %)",
      valid: validatePassword.hasSpecialChar,
    },
    {
      label: "Pelo menos 1 letra maiúscula (A-Z)",
      valid: validatePassword.hasUpperCase,
    },
    {
      label: "As senhas devem ser iguais",
      valid: validatePassword.hasEqualPassword,
    },
    {
      label: "Pelo menos 8 caracteres",
      valid: validatePassword.hasMinimumLength,
    },
  ];
  

  useEffect(() => {
    handlePassword();
  }, [password, confirmPassword]);
  return (
    <form className="text-gray-300 p-10 rounded flex flex-col gap-4 max-w-lg bg-gray-100/12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Redefinação de senha</h2>
        <p>Crie uma nova senha para acessar sua conta.</p>
      </div>

      <label htmlFor="password">
        Nova senha
        <div className="border-2 border-gray-300 rounded-2xl flex justify-around items-center mt-1">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="placeholder-gray-300 text-gray-300 w-full p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-2" type="button" onClick={togglePassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </label>
      <ul className="flex flex-col">
        {
          rules.map(({valid, label}) => ( 
          <li className="flex gap-2 items-center">
            {valid ? <FaCheckCircle className="text-sm text-green-400" /> :<IoMdAlert /> }
            <p className={`${valid ? 'text-green-400' : ''}`}>{label}</p>
          </li>))
        }
      </ul>

      <label htmlFor="confirmPassword">
        Confirmar nova senha
        <div className="border-2 border-gray-300 rounded-2xl flex justify-around items-center mt-1">
          <input
             type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            className="placeholder-gray-300 text-gray-300 w-full p-2"
            onChange={(e) => setConfirmPassword(e.target.value)}

          />
          <button className="p-2" onClick={togglePassword}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </label>
      <button className="bg-black text-white rounded-2xl font-bold p-3">
        Salvar
      </button>
    </form>
  );
};

export default Forms;
