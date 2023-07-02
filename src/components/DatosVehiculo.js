import React, { useState } from 'react';

const DatosVehiculo = ({ onNext }) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [nivelGasolina, setNivelGasolina] = useState('');
  const [estadoExterior, setEstadoExterior] = useState('');

  const handleNext = () => {
    // Validar los campos antes de continuar
	console.log("Se ejecuto handleNext en DatosVehiculo.js");
    if (!marca || !modelo || !placa || !nivelGasolina || !estadoExterior) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Pasar al siguiente paso
    onNext({
		marca,
		modelo,
		placa,
		nivelGasolina,
		estadoExterior
	});
  };

  return (
    <div>
      <h2>Datos del Vehículo</h2>
      <form>
        <label>Marca:</label>
        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />

        <label>Modelo:</label>
        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />

        <label>Placa:</label>
        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />

        <label>Nivel de Gasolina:</label>
        <input type="text" value={nivelGasolina} onChange={(e) => setNivelGasolina(e.target.value)} />

        <label>Estado Exterior:</label>
        <textarea value={estadoExterior} onChange={(e) => setEstadoExterior(e.target.value)}></textarea>

        <button type="button" onClick={handleNext}>Siguiente</button>
      </form>
    </div>
  );
};

export default DatosVehiculo;
