// Checkout.jsx (Componente de Checkout)
import { useState } from 'react';

const Checkout = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer validaciones antes de generar el código, enviar los datos, etc.
    const randomCode = generateRandomCode(); // Función para generar el código de 15 caracteres
    setGeneratedCode(randomCode);
    setShowCode(true);
    onSubmit({ name, phone, email, randomCode }); // Envía los datos a la función onSubmit
  };

  const generateRandomCode = () => {
    // Código para generar un código aleatorio de 15 caracteres
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 20;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  return (
    <div>
      {!showCode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
          <p>Código generado: {generatedCode}</p>
          {/* Aquí podrías mostrar cualquier otra información relevante */}
        </div>
      )}
    </div>
  );
};

export default Checkout;
