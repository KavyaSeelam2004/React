import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }
    const heightInM = parseFloat(height) / 100;
    const bmiVal = (parseFloat(weight) / (heightInM * heightInM)).toFixed(2);
    setBmi(bmiVal);

    let result = "";
    if (bmiVal < 18.5) result = "Underweight";
    else if (bmiVal < 24.9) result = "Normal";
    else if (bmiVal < 29.9) result = "Overweight";
    else result = "Obese";

    setStatus(result);
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #b2f7ef, #c2f9e1)",
    color: "#00332d",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    transition: "all 0.5s ease",
  };

  const titleStyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    marginBottom: "30px",
    textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

  const inputGroup = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "25px",
  };

  const inputStyle = {
    padding: "12px 16px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "2px solid #004d40",
    outline: "none",
    minWidth: "200px",
    transition: "border 0.3s",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "none",
    background: "#2ed8b0",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const resultStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#e0f7f1",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const sectionStyle = {
    marginTop: "40px",
    maxWidth: "900px",
    lineHeight: "1.8",
    backgroundColor: "#d6f9f1",
    borderRadius: "12px",
    padding: "30px",
    textAlign: "left",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    marginTop: "20px",
  };

  const tipBox = {
    marginTop: "30px",
    backgroundColor: "#c9f7ec",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "600px",
  };

  const listItem = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>BMI Calculator</h1>

      <div style={inputGroup}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={inputStyle}
        />
        <button onClick={calculateBMI} style={buttonStyle}>
          Calculate
        </button>
      </div>

      {bmi && (
        <div style={resultStyle}>
          <p style={{ fontSize: "1.4rem" }}>
            Your BMI: <strong>{bmi}</strong>
          </p>
          <p>Status: <strong>{status}</strong></p>
        </div>
      )}

      <div style={sectionStyle}>
        <h2>🌿 What is BMI?</h2>
        <p>
          BMI (Body Mass Index) is a numerical value calculated from a person's weight and height.
          It's widely used to assess whether you’re underweight, normal, overweight, or obese.
          It gives a general indication of health based on your body composition.
        </p>
        <img
          src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg"
          alt="BMI Chart"
          style={imageStyle}
        />
      </div>

      <div style={tipBox}>
        <h2>💡 Health Tips</h2>
        <ul>
          <li style={listItem}>🥗 Eat a variety of nutrient-rich foods daily.</li>
          <li style={listItem}>🚰 Drink at least 8 glasses of water every day.</li>
          <li style={listItem}>🚴‍♀️ Engage in physical activity for 30 minutes daily.</li>
          <li style={listItem}>🛌 Maintain a regular sleep schedule (7–9 hrs).</li>
          <li style={listItem}>🧘‍♀️ Practice meditation or yoga to manage stress.</li>
          <li style={listItem}>📉 Regularly monitor your weight and health stats.</li>
          <li style={listItem}>🧃 Avoid sugary drinks and processed food.</li>
          <li style={listItem}>🍓 Choose whole fruits over juices and snacks.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>📌 BMI Classification (WHO)</h2>
        <ul>
          <li><strong>Below 18.5</strong>: Underweight</li>
          <li><strong>18.5 – 24.9</strong>: Normal</li>
          <li><strong>25 – 29.9</strong>: Overweight</li>
          <li><strong>30 and above</strong>: Obese</li>
        </ul>
        <p style={{ marginTop: "20px" }}>
          📍Note: BMI is a general guideline. It does not directly measure body fat and may not be accurate for athletes or individuals with high muscle mass.
        </p>
      </div>

      <div style={tipBox}>
        <h2>🧠 Did You Know?</h2>
        <ul>
          <li style={listItem}>💡 BMI was invented in the 1830s by a Belgian mathematician.</li>
          <li style={listItem}>💪 Muscle weighs more than fat — athletes may have a high BMI but low body fat.</li>
          <li style={listItem}>🌎 Over 1.9 billion adults are overweight globally.</li>
          <li style={listItem}>📊 Tracking BMI over time helps in early detection of health risks.</li>
        </ul>
      </div>
    </div>
  );
};

export default BmiCalculator;
