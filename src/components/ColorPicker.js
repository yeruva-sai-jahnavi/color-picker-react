import { React, useState } from "react";

function ColorPicker({ colors }) {
    const [visible, setVisible] = useState(false);
    const [btnColor, setBtnColor] = useState("white");

    function ColorBox({ color }) {
        return (
            <button
                className="box"
                style={{ backgroundColor: color }}
                onClick={() => colorBoxClick(color)}
                type="button"
            ></button>
        );
    }

    function colorBoxClick(color) {
        setBtnColor(color);
        setVisible(!visible);
    }

    function ColorsList() {
        return (
            <div id="colors-list">
                {colors.map((color) => {
                    return <ColorBox key={color} color={color} />;
                })}
            </div>
        );
    }

    return (
        <div className="text-center">
            {console.log(visible)}
            <h1>Color Picker</h1>
            <button
                type="button"
                onClick={() => {
                    setVisible(!visible);
                }}
                style={{ backgroundColor: btnColor }}
            >
                Pick a Color!
            </button>
            {visible ? <ColorsList /> : ""}
        </div>
    );
}

export default ColorPicker;
