import ColorPicker from "./components/ColorPicker";

function App() {
    const colors = [
        "#33ffbd",
        "#DAF7A6",
        "#FFC300",
        "#FF5733",
        "#C70039",
        "#900C3F",
        "#c3c3e6",
        "#d1c8e1",
        "#bba0ca",
        "#b370b0",
        "#87255b",
        "#ffc09f",
        "#ffee93",
        "#fcf5c7",
        "#a0ced9",
        "#adf7b6",
    ];
    return (
        <div className="App">
            <ColorPicker colors={colors} />
        </div>
    );
}

export default App;
