import React from "react";
import { useQRCode } from "next-qrcode";

interface QRcodeProps {
  loginCode: string;
}

const QRcode: React.FC<QRcodeProps> = ({ loginCode }) => {
  const { Canvas } = useQRCode();
  return (
    <div className="rounded-lg overflow-hidden">
      <Canvas
        text={`https://localhost:3000/v1/login/${loginCode}`}
        options={{
          errorCorrectionLevel: "L",
          margin: 2,
          scale: 5,
          width: 250,
          color: {
            dark: "#e7e1e1",
            light: "#3e0944",
          },
        }}
        logo={{
          src: "https://next-qrcode.js.org/github.png",
          options: {
            width: 40,
            x: undefined,
            y: undefined,
          },
        }}
      />
    </div>
  );
};

export default QRcode;
