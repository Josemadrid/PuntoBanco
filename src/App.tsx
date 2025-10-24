import { useState } from "react";

export default function App() {
  const generateRandomQuestion = (): number => {
    const hundreds = Math.floor(Math.random() * 29) + 1;
    return hundreds * 100;
  };

  const [current, setCurrent] = useState<number>(generateRandomQuestion());
  const [percentInput, setPercentInput] = useState<string>("");
  const [resultInput, setResultInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkAnswer = () => {
    const correctPercent = current * 0.05;
    const correctResult = current * 0.95;
    const userPercent = parseFloat(percentInput.trim());
    const userResult = parseFloat(resultInput.trim());

    if (userPercent === correctPercent && userResult === correctResult) {
      setMessage("¡Correcto!");
      setCurrent(generateRandomQuestion());
      setPercentInput("");
      setResultInput("");
    } else {
      setMessage("Incorrecto, intentalo otra vez.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") checkAnswer();
  };

  const containerStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px"
  };

  const cardStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%"
  };

  const questionStyle: React.CSSProperties = {
    fontSize: "3em",
    fontWeight: "bold",
    color: "#667eea",
    margin: "20px 0"
  };

  const inputStyle: React.CSSProperties = {
    padding: "15px",
    borderRadius: "10px",
    border: "2px solid #e0e0e0",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1.2em",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
    transition: "border-color 0.3s"
  };

  const btnStyle: React.CSSProperties = {
    padding: "15px 30px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1.1em",
    fontWeight: "600",
    transition: "transform 0.2s",
    width: "100%"
  };

  const messageStyle: React.CSSProperties = {
    marginTop: "20px",
    fontSize: "1.2em",
    fontWeight: "600",
    minHeight: "30px",
    color: message.includes("Correcto") ? "#10b981" : "#ef4444"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ margin: 0, marginBottom: 10, color: "#333", fontSize: "1.8em" }}>
          Practica Calculos
        </h1>
        <p style={{ color: "#666", marginBottom: 10 }}>
          Calcula el 5% y el resultado sin el 5%
        </p>
        <div style={questionStyle}>{current}</div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", color: "#666", marginBottom: "5px", fontWeight: "600" }}>
            ¿Cuanto es el 5%?
          </label>
          <input
            type="number"
            value={percentInput}
            onChange={(e) => setPercentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={inputStyle}
            placeholder="5% del número..."
            autoFocus
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", color: "#666", marginBottom: "5px", fontWeight: "600" }}>
            ¿Cuanto es sin el 5%?
          </label>
          <input
            type="number"
            value={resultInput}
            onChange={(e) => setResultInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={inputStyle}
            placeholder="Resultado final..."
          />
        </div>

        <button onClick={checkAnswer} style={btnStyle}>
          Comprobar
        </button>

        <div style={messageStyle}>{message}</div>
      </div>
    </div>
  );
}
