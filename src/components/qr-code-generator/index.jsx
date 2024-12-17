import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {


    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("")


    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput("")
    }

    return (

        <div>
            <h1>QR Code Generator</h1>

            <div>
                <input value={input} onChange={(e) =>
                     setInput(e.target.value)} type="text"
                      name="Qr-code" placeholder="Enter your value here" />;
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                     onClick={handleGenerateQrCode} >Generate</button>
            </div>

            <div>
                <QRCode

                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>

        </div>

    );
}

export default QRCodeGenerator;