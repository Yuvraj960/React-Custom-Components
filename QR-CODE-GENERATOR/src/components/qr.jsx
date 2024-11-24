/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./qr.css";

const QRCodeGenerator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQrCode = () => {
    setQrCodeValue(input);
    document.getElementById("qr-code-value").innerHTML = "";
  };

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="qr-code-value"
          name="qr-code"
          placeholder="Enter your data here..."
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode
          id="qr-code-value"
          value={qrCodeValue}
          size={400}
          bgColor="#fff"
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
