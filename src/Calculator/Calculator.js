import { useState } from "react";
import "../App.css";

const keys = [
    [
        '1',
        '2',
        '3',
        '+'
    ],
    [
        '4',
        '5',
        '6',
        '-'
    ],
    [
        '7',
        '8',
        '9',
        '*'
    ],
    [
        'C',
        '0',
        '=',
        '/'
    ],
]

export default function Calculator() {

    const [calculatorText, setCalculatorText] = useState("WELCOME")

    const pressKey = (key) => {
        if (calculatorText === "WELCOME") {
            setCalculatorText("");
            if (key === "=")
                return;
        }
        if (key === '=') {
            pressedEqual();
            return;
        }
        if (key === 'C') {
            setCalculatorText("");
            return;
        }
        let previousText = (calculatorText === "ERROR" || calculatorText === "WELCOME" ? "" : calculatorText);
        setCalculatorText(previousText + ((previousText === "" || previousText === '0') && key === '0' ? "" : key));
    }

    const pressedEqual = () => {
        let r = null;
        try {
            r = eval(calculatorText)
            setCalculatorText(r && r.toString());
        } catch {
            setCalculatorText("ERROR")
        }
    }

    return (
        <div className="calculator-background">
            <div className="calculator-screen">
                <div className="calculator-screen-content">
                    <span>{calculatorText && calculatorText.substr && calculatorText.substr(0, 11)}</span>
                </div>
            </div>
            <div className="calculator-body">
                {
                    keys.map((line, i) => (
                        <div className="calculator-line" key={i}>
                            {
                                line.map((key, j) => (
                                    <input type="button" className="calculator-button" key={j} onClick={() => pressKey(key)} value={key} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}