import questions from "./components/questions.js";

window.addEventListener("DOMContentLoaded", () => {
    const Next = document.querySelector(".Next"),
        question = document.querySelector(".question-bar span"),
        prizeHtml = document.querySelectorAll(".prize-list li"),
        listCounterHtml = document.querySelectorAll(".prize-count li"),
        withdraw = document.querySelector(".withdraw"),
        currentPrize = document.querySelector(".currentPrize"),
        callFriend = document.querySelector(".callFriend"),
        fiftyFifty = document.querySelector(".fiftyFifty");

    let answerHtml = document.createElement("div");
    document.querySelector(".question-answers").appendChild(answerHtml);

    let questionNumber = -1, prize = 0;
    function congratulate() {
        if (confirm(`Поздравляем! Вы выиграли ${prize}. Хотите сыграть сначала?`)) location.reload();
    }

    function nextQuestion() {
        if (++questionNumber < 15) {
            question.innerHTML = questions[questionNumber].question;
            if (questionNumber === 5 || questionNumber === 10) {
                prize = prizeHtml[questionNumber - 1].innerHTML;
            }
            setPrizeStyle();
            currentPrize.innerHTML = `Ваш текущий выигрыш: ${questionNumber - 1 > -1 ? prizeHtml[questionNumber - 1].innerHTML : 0}`;

            answerHtml.innerHTML = `
            <button>${questions[questionNumber].answers[0]}</button>
            <button>${questions[questionNumber].answers[1]}</button>
            <button>${questions[questionNumber].answers[2]}</button>
            <button>${questions[questionNumber].answers[3]}</button>`;

            for (let i = 0; i < answerHtml.children.length; i++) {
                answerHtml.children[i].addEventListener("click", () => {
                    checkAnswer(i + 1);
                })
            }
        } else {
            prize = prizeHtml[14].innerHTML;
            currentPrize.innerHTML = `Ваш текущий выигрыш: ${prize}`;
            congratulate();
        }
    }


    function checkAnswer(a) {
        if (a === questions[questionNumber].correctAnswer) {
            nextQuestion();
        } else {
            wrongAnswer();
        }
    }

    function wrongAnswer() {
        let ask = confirm(`Вы проиграли, Выш выигрыш составляет: ${prize}, начать сначала?`);
        if (ask) {
            location.reload();
        }
    }

    function setPrizeStyle() {
        [...prizeHtml, ...listCounterHtml].forEach(item => item.classList.remove("active"));

        prizeHtml[questionNumber].classList.add("active");
        listCounterHtml[questionNumber].classList.add("active");
    }



    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    nextQuestion();

    callFriend.addEventListener("click", () => {
        answerHtml.children[questions[questionNumber].correctAnswer - 1].style.color = "gold";
        callFriend.classList.add("used");
    }, {once: true});
    fiftyFifty.addEventListener("click", () => {
        answerHtml.children[questions[questionNumber].correctAnswer - 1].style.color = "gold";
        const randAnswer = () => {
            let value = getRandomInt(4);
            return value === questions[questionNumber].correctAnswer - 1 ? randAnswer() : value;
        }
        answerHtml.children[randAnswer()].style.color = "gold";
        fiftyFifty.classList.add("used");
    }, {once: true});
    withdraw.addEventListener("click", () => {
        prize = questionNumber - 1 > -1 ? prizeHtml[questionNumber - 1].innerHTML : 0;
        congratulate();
    })

    // Next.addEventListener("click", () => {
    //     nextQuestion();
    // });
})
