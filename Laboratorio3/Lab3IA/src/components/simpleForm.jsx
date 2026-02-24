import { useState } from "react";

const styles = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    color: "#4a3f8f",
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "30px",
    borderBottom: "3px solid #667eea",
    paddingBottom: "12px",
  },
  formGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    color: "#555",
    fontWeight: "600",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "1rem",
    color: "#333",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
    background: "#f9f9fb",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
    letterSpacing: "1px",
    transition: "opacity 0.2s, transform 0.1s",
  },
  result: {
    marginTop: "30px",
    background: "linear-gradient(135deg, #f0f4ff 0%, #faf0ff 100%)",
    border: "2px solid #c4b5f4",
    borderRadius: "14px",
    padding: "24px",
    animation: "fadeIn 0.4s ease",
  },
  resultTitle: {
    color: "#4a3f8f",
    fontWeight: "700",
    fontSize: "1.1rem",
    marginBottom: "14px",
    textAlign: "center",
  },
  resultItem: {
    margin: "8px 0",
    color: "#444",
    fontSize: "0.97rem",
    lineHeight: "1.6",
  },
  span: {
    fontWeight: "700",
    color: "#5a4fcf",
  },
};

export default function SimpleForm() {
  const [form, setForm] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [info, setInfo] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    const allFilled = Object.values(form).every((v) => v.trim() !== "");
    if (!allFilled) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setInfo({ ...form });
    setSubmitted(true);
  };

  const fields = [
    { name: "matricula", label: "Matrícula", type: "text" },
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "apellidos", label: "Apellidos", type: "text" },
    { name: "edad", label: "Edad", type: "number" },
    { name: "universidad", label: "Universidad", type: "text" },
    { name: "carrera", label: "Carrera", type: "text" },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h2 style={styles.title}>📋 Registro Estudiantil</h2>

        {fields.map((f) => (
          <div style={styles.formGroup} key={f.name}>
            <label style={styles.label}>{f.label}</label>
            <input
              style={styles.input}
              type={f.type}
              name={f.name}
              value={form[f.name]}
              onChange={handleChange}
              placeholder={`Ingresa tu ${f.label.toLowerCase()}`}
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
            />
          </div>
        ))}

        <button
          style={styles.button}
          onClick={handleSubmit}
          onMouseOver={(e) => (e.target.style.opacity = "0.88")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Ver Información
        </button>

        {submitted && info && (
          <div style={styles.result}>
            <p style={styles.resultTitle}>🎓 Información del Estudiante</p>
            <p style={styles.resultItem}><span style={styles.span}>Matrícula:</span> {info.matricula}</p>
            <p style={styles.resultItem}><span style={styles.span}>Nombre:</span> {info.nombre}</p>
            <p style={styles.resultItem}><span style={styles.span}>Apellidos:</span> {info.apellidos}</p>
            <p style={styles.resultItem}><span style={styles.span}>Edad:</span> {info.edad} años</p>
            <p style={styles.resultItem}><span style={styles.span}>Universidad:</span> {info.universidad}</p>
            <p style={styles.resultItem}><span style={styles.span}>Carrera:</span> {info.carrera}</p>
          </div>
        )}
      </div>
    </div>
  );
}