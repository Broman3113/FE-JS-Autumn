import RandomOrg from 'random-org';

addEventListener("DOMContentLoaded", () => {
    const minValue = document.querySelector("#min");
    const maxValue = document.querySelector("#max");
    const numValue = document.querySelector("#num")
    const fairRandom = document.querySelector("#fair-random");
    const submit = document.querySelector("#submit");
    const result = document.querySelector("#result");
    const minResult = document.querySelector(".random-result-min");
    const maxResult = document.querySelector(".random-result-max");
    const numResult = document.querySelector(".random-result-num");


    submit.addEventListener("click", () => {
        if (minValue.value >= maxValue.value) {
            maxValue.value = +minValue.value + 1;
        }
        let random = new RandomOrg({apiKey: '8766084e-9f15-4f66-9782-1d0379231168'});

        random.generateIntegers({
            min: minValue.value,
            max: maxValue.value,
            n: numValue.value,
            replacement: !fairRandom.checked
        })
            .then(res => {
                console.log(res.random.data);
                result.innerHTML = res.random.data;
            })
        minResult.innerText = `Min: ${minValue.value}`;
        maxResult.innerText = `Max: ${maxValue.value}`;
        numResult.innerText = `Num: ${numValue.value}`;
    });
    result.onclick = function () {
        document.execCommand("copy");
    }

    result.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", result.textContent);
            console.log(`You copied: ${event.clipboardData.getData("text")}`)
        }
    });
})
