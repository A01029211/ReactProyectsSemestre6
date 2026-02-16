// COMPONENTE 1: Hola Mundo
function HolaMundo() {
  return <h1>¡Hola Mundo!</h1>;
}

// COMPONENTE 2: Uso de variables
function ComponenteVariables() {
  const nombre = "Santiago";

  return <h2>¡Hola, {nombre}!</h2>;
}

// APP PRINCIPAL
function App() {
  return (
    <div>
      <HolaMundo />
      <ComponenteVariables />
    </div>
  );
}

export default App;