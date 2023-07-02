import './App.css';
import React, { useState } from 'react';
import DatosCliente from './components/DatosCliente';
import DatosVehiculo from './components/DatosVehiculo';
import SeleccionServicios from './components/SeleccionServicios';

const App = () => {
  const [step, setStep] = useState(1);
    
  const [cliente, setCliente] = useState(null);
  console.log("cliente: " + cliente);
    
  const [vehiculo, setVehiculo] = useState(null);
  console.log("vehiculo: " + vehiculo);
    
  const [servicios, setServicios] = useState(null);
  console.log("servicios: " + servicios)
  
  const [theme, setTheme] = useState('light');
	
  const [fechaEntrega, setFechaEntrega] = useState(null);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleClienteSubmit = (datosCliente) => {
    console.log("datosCliente: " + datosCliente);
	setCliente(datosCliente);
    handleNextStep();
  };

  const handleVehiculoSubmit = (datosVehiculo) => {
    console.log("datosVehiculo: " + datosVehiculo);
	setVehiculo(datosVehiculo);
    handleNextStep();
  };

  const handleServiciosSubmit = (serviciosSeleccionados) => {
    console.log("serviciosSeleccionados: " + serviciosSeleccionados);
	setServicios(serviciosSeleccionados);
    handleNextStep();
  };
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
	
  const calcularFechaEntrega = () => {
    const fechaActual = new Date();
    const diasAgregados = Math.ceil(Object.values(servicios || {}).filter((seleccionado) => seleccionado).length / 8);
    const fechaEstimada = new Date(fechaActual.getTime() + (diasAgregados * 24 * 60 * 60 * 1000));

    if (fechaEstimada.getHours() >= 17) {
      fechaEstimada.setDate(fechaEstimada.getDate() + 1);
      fechaEstimada.setHours(8);
    }

    setFechaEntrega(fechaEstimada);
  };
  
  const handleGenerarOrden = () => {
    alert("Orden generada exitosamente");
    setStep(1);
    setCliente(null);
    setVehiculo(null);
    setServicios(null);
    setFechaEntrega(null);
  };
  
  const getThemeButtonText = () => {
    return theme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };
  
  if (step === 4 && !fechaEntrega) {
    calcularFechaEntrega();
  }
  
  return (    
	 <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
	  <button onClick={handleToggleTheme}>{getThemeButtonText()}</button>
      {step === 1 && <DatosCliente onNext={handleClienteSubmit} />}
      {step === 2 && <DatosVehiculo onNext={handleVehiculoSubmit} />}
      {step === 3 && <SeleccionServicios onNext={handleServiciosSubmit} />}
      {step === 4 && (
        <div>
          <h2>Orden de Trabajo</h2>
          <p>Cliente: {cliente && cliente.nombre}</p>
          <p>Email: {cliente && cliente.email}</p>
          <p>Contacto: {cliente && cliente.contacto}</p>
          <p>Identificación Fiscal: {cliente && cliente.identificacion}</p>
          <p>Tipo de Identificación: {cliente && cliente.tipoIdentificacion}</p>

          <p>Marca del Vehículo: {vehiculo && vehiculo.marca}</p>
          <p>Modelo del Vehículo: {vehiculo && vehiculo.modelo}</p>
          <p>Placa del Vehículo: {vehiculo && vehiculo.placa}</p>
          <p>Nivel de Gasolina: {vehiculo && vehiculo.nivelGasolina}</p>
          <p>Estado Exterior: {vehiculo && vehiculo.estadoExterior}</p>

          <p>Servicios Seleccionados:</p>
		  <ul>
            {Object.entries(servicios || {}).map(([servicio, seleccionado]) => (
              <li key={servicio}>{servicio}: {seleccionado ? 'Sí' : 'No'}</li>
            ))}
          </ul>
		  
          <p>Fecha y Hora Estimada de Entrega: {fechaEntrega && fechaEntrega.toLocaleString()}</p>
		  
		  <button onClick={handleGenerarOrden}>Generar Orden</button>
        </div>
      )}
    </div>
  );
};

export default App;
