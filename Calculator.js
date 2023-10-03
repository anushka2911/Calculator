export let Calculator = () => {
    return (
        <>
            <div id="CalculatorBody">
                <div id="calculator-screen"></div>

                <div id="row1">
                    <button className="button" id="7">7</button>
                    <button className="button" id="8">8</button>
                    <button className="button" id="9">9</button>
                    <button className="button" id="divide">/</button>
                </div>

                <div id="row2">
                    <button className="button" id="4">4</button>
                    <button className="button" id="5">5</button>
                    <button className="button" id="6">6</button>
                    <button className="button" id="multiply">*</button>
                </div>

                <div id="row3">
                    <button className="button" id="1">1</button>
                    <button className="button" id="2">2</button>
                    <button className="button" id="3">3</button>
                    <button className="button" id="add">+</button>
                </div>

                <div id="row4">
                    <button className="button" id="0">0</button>
                    <button className="button" id="equal">=</button>
                    <button className="button" id="clear">C</button>
                    <button className="button" id="subtract">-</button>
                </div>
            </div>
        </>
    );
}
