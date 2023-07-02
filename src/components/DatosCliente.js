import React, { useState } from 'react';

const DatosCliente = ({ onNext }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  
  const [datosCliente, setDatosCliente] = useState({
  nombre: '',
  email: '',
  contacto: '',
  identificacion: '',
  tipoIdentificacion: '',
  });
  
  const handleNext = () => {
    // Validar los campos antes de continuar
    console.log("Se ejecuto handleNext en DatosCliente.js");
	if (!nombre || !email || !contacto || !identificacion || !tipoIdentificacion) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Pasar al siguiente paso
    onNext({
		nombre,
		email,
		contacto,
		identificacion,
		tipoIdentificacion
	});
  };

  return (
    <div>
      <h2>Datos del Cliente</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contacto:</label>
        <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />

        <label>Identificación Fiscal:</label>
        <input type="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />

        <label>Tipo de Identificación:</label>
        <select value={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.target.value)}>
          <option value="cedula">Cédula</option>
          <option value="ruc">RUC</option>
          <option value="pasaporte">Pasaporte</option>
        </select>

        <button type="button" onClick={handleNext}>Siguiente</button>
      </form>
    </div>
  );
};

export default DatosCliente;
