import React, { useState } from 'react';

const SeleccionServicios = ({ onNext }) => {
  const [servicios, setServicios] = useState({
    cambioAceite: false,
    cambioFrenos: false,
    alineacionBalanceo: false,
    diagnosticoGeneral: false,
    revisionElectrica: false,
    revisionSuspension: false,
  });
  
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState({});
  
  const handleServiceChange = (service) => {
    setServicios((prevServicios) => ({
      ...prevServicios,
      [service]: !prevServicios[service],
    }));
  };
  
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setServiciosSeleccionados((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(serviciosSeleccionados);
  };

  const handleNext = () => {
    // Validar si al menos un servicio ha sido seleccionado
	console.log("Se ejecuto handleNext en SeleccionServicios.js");
    if (Object.values(servicios).every((value) => !value)) {
      alert('Por favor selecciona al menos un servicio.');
      return;
    }

    // Pasar al siguiente paso
    onNext(servicios);
  };

  return (
    <div>
      <h2>Selección de Servicios</h2>
      <form>
        <label>
          <input
            type="checkbox"
            checked={servicios.cambioAceite}
            onChange={() => handleServiceChange('cambioAceite')}
          />
          Cambio de Aceite
        </label>

        <label>
          <input
            type="checkbox"
            checked={servicios.cambioFrenos}
            onChange={() => handleServiceChange('cambioFrenos')}
          />
          Cambio de Frenos
        </label>

        <label>
          <input
            type="checkbox"
            checked={servicios.alineacionBalanceo}
            onChange={() => handleServiceChange('alineacionBalanceo')}
          />
          Alineación y Balanceo
        </label>

        <label>
          <input
            type="checkbox"
            checked={servicios.diagnosticoGeneral}
            onChange={() => handleServiceChange('diagnosticoGeneral')}
          />
          Diagnóstico General
        </label>

        <label>
          <input
            type="checkbox"
            checked={servicios.revisionElectrica}
            onChange={() => handleServiceChange('revisionElectrica')}
          />
          Revisión del Sistema Eléctrico
        </label>

        <label>
          <input
            type="checkbox"
            checked={servicios.revisionSuspension}
            onChange={() => handleServiceChange('revisionSuspension')}
          />
          Revisión de la Suspensión
        </label>

        <button type="button" onClick={handleNext}>Siguiente</button>
      </form>
    </div>
  );
};

export default SeleccionServicios;
