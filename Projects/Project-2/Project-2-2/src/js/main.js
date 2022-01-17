window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".calculator-buttons button");
    const eq = document.querySelector(".calculator-display-equation span");
    const res = document.querySelector(".calculator-display-answer span");

    const checkBtn = (btn) => {
        switch (btn) {
            case "ac":
                clearEq();
                break;
            case "backspace":
                removeLastChar();
                break;
            case "=":
                calc();
                break;
            case "-":
            case "+":
            case "*":
            case "/":
            case "%":
                if (eq.innerHTML || btn === "-") {
                    if (eq.innerHTML.slice(-1) !== "+" &&
                        eq.innerHTML.slice(-1) !== "-" &&
                        eq.innerHTML.slice(-1) !== "*" &&
                        eq.innerHTML.slice(-1) !== "/" &&
                        eq.innerHTML.slice(-1) !== "%") { // Check if the last character not equals + - * / %
                        eq.innerHTML += btn;
                    } else if (eq.innerHTML.length > 1) {
                        eq.innerHTML = eq.innerHTML.substring(0, eq.innerHTML.length - 1) + btn; // Replace only + - * /
                    }
                }
                break;
            default: // The remaining values that don't need additional processing
                eq.innerHTML += btn;
        }
        console.log(eq.innerHTML);
    }
    const clearEq = () => {
        eq.innerHTML = "";
        res.innerHTML = "";
    }
    const removeLastChar = () => {
        eq.innerHTML = eq.innerHTML.slice(0, -1);
    }
    const calc = () => {
        let regEx = /(\d+)%(\d+)/g; // Matches "40%10"
        let percentRes = eq.innerHTML.replace(regEx, (a) => (a.slice(0, a.indexOf("%")) * a.slice(a.indexOf("%") + 1)) / 100);

        res.innerHTML = eval(percentRes);
    }

    buttons.forEach(item => {
        item.addEventListener("click", () => {
            // console.log(item.id);
            checkBtn(item.id);
        })
    })
})
