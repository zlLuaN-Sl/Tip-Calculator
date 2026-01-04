const input = document.getElementById('input');
const resultAmount = document.getElementById('resGorjeta');
const resultTotal = document.getElementById('resTotal');
const resetBtn = document.getElementById('btn-reset');
const percentButtons = document.querySelectorAll('.percent-btn');


class TipCalculator {

    constructor(input, resultTip, resultTotal) {
        this.input = input;
        this.resultTip = resultTip;
        this.resultTotal = resultTotal;

        }

        getValue() {
            return Number(this.input.value);
        }

        calculateTip(percent) {
            const inputValue = this.getValue();
            return inputValue * (percent / 100);
        }

        calculateTotal (tip) {
            return this.getValue() + tip
        }

        updateUi(tip, top) {
            this.resultTip.textContent = `$${tip.toFixed(2)}`;
            this.resultTotal.textContent = `$${top.toFixed(2)}`;
        }

        reset() {
            this.input.value = '';
            this.resultTip.textContent = '$0.00'
            this.resultTotal.textContent = '$0.00'
        }
}

const calculator = new TipCalculator(input, resultAmount, resultTotal);



const setActiveButton = (activeButton) => {
    percentButtons.forEach(button => {
        button.classList.remove("bg-pink-500", "text-white");
        button.classList.add('text-pink-400');
    });

    activeButton.classList.add("bg-pink-500", "text-white")
    activeButton.classList.remove('text-pink-400')
}



percentButtons.forEach((button) => {
    button.addEventListener('click', () =>  {
        const percent = button.dataset.percent;
        const inputValue = calculator.getValue();

        setActiveButton(button)

        if(!inputValue) return;

        const tip = calculator.calculateTip(percent);
        const total = calculator.calculateTotal(tip);


        calculator.updateUi(tip, total)

    })
})

resetBtn.addEventListener('click', () => {
    calculator.reset()
});

