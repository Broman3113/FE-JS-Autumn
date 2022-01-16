/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/questions.js":
/*!****************************************!*\
  !*** ./src/js/components/questions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const questions = [{
  number: 1,
  question: "Какой лед любят не только многие дети, но и взрослые?",
  answers: ["Фруктовый", "Овощной", "Зерновой", "Рыбный"],
  correctAnswer: 1
}, {
  number: 2,
  question: "Как иногда говорят о человеке, открывшем рот?",
  answers: ["Надел шапочку", "Повязал галстук", "Разинул варежку", "Застегнул сапожки"],
  correctAnswer: 3
}, {
  number: 3,
  question: "Что на Руси традиционно делали, празднуя Масленицу?",
  answers: ["Приманивали ворон", "Сжигали чучело", "Топтали грядки", "Уничтожали урожай"],
  correctAnswer: 2
}, {
  number: 4,
  question: "Какое слово впервые появилось в художественной литературе в повести Виктора Сапарина «Новая планета», вышедшей в 1950 году?",
  answers: ["Селянин", "Космонавт", "Тиктокер", "Менеджер"],
  correctAnswer: 2
}, {
  number: 5,
  question: "Как звали сестру второго космонавта Германа Титова?",
  answers: ["Манижа", "Елка", "Лопита", "Земфира"],
  correctAnswer: 4
}, {
  number: 6,
  question: "Где работал главный герой фильма «День сурка»?",
  answers: ["В больнице", "На телевидении", "В магазине", "В музее"],
  correctAnswer: 2
}, {
  number: 7,
  question: "Какая денежная единица в июне 2021 года стала официальным платежным средством в Сальвадоре?",
  answers: ["Пиастр", "Луидор", "Эфир", "Биткоин"],
  correctAnswer: 4
}, {
  number: 8,
  question: "В каком городе начинается и заканчивается действие романа Жюля Верна «Вокруг света за восемьдесят дней»?",
  answers: ["Париж", "Лондон", "Нью-Йорк", "Сан-Франциско"],
  correctAnswer: 2
}, {
  number: 9,
  question: "Какое изображение есть на флаге Кокосовых островов?",
  answers: ["Орех", "Краб", "Пальма", "Кусок сахара"],
  correctAnswer: 3
}, {
  number: 10,
  question: "Кому подарили щенка собаки-космонавта Стрелки?",
  answers: ["Елизавете II", "Жаклин Кеннеди", "Мао Цзэдуну", "Папе римскому"],
  correctAnswer: 2
}, {
  number: 11,
  question: "Как расшифровывалась первая буква кодового обозначения искусственного спутника Земли «ПС-1»?",
  answers: ["Полносборный", "Платиновый", "Промышленный", "Простейший"],
  correctAnswer: 4
}, {
  number: 12,
  question: "Кто был президентом США, когда вышла в свет «Повесть о настоящем человеке» Бориса Полевого?",
  answers: ["Дуайт Эйзенхауэр", "Гарри Трумэн", "Франклин Рузвельт", "Джон Кеннеди"],
  correctAnswer: 2
}, {
  number: 13,
  question: "Кто является мировым рекордсменом по суммарной продолжительности пребывания на орбите?",
  answers: ["Анатолий Березовой", "Юрий Маланченко", "Анатолий Иванишин", "Геннадий Падалака"],
  correctAnswer: 4
}, {
  number: 14,
  question: "Кто стал первым человеком, получившим в России чин генерала?",
  answers: ["Александр Лесли", "Патрик Гордон", "Франц Лефорт", "Никоглай Бауман"],
  correctAnswer: 1
}, {
  number: 15,
  question: "Какой химический элемент назван в честь злого подземного гнома?",
  answers: ["Гафний", "Кобальт", "Бериллий", "Теллур"],
  correctAnswer: 2
}];
/* harmony default export */ __webpack_exports__["default"] = (questions);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_questions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/questions.js */ "./src/js/components/questions.js");

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
  let questionNumber = -1,
      prize = 0;

  function congratulate() {
    if (confirm(`Поздравляем! Вы выиграли ${prize}. Хотите сыграть сначала?`)) location.reload();
  }

  function nextQuestion() {
    if (++questionNumber < 15) {
      question.innerHTML = _components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].question;

      if (questionNumber === 5 || questionNumber === 10) {
        prize = prizeHtml[questionNumber - 1].innerHTML;
      }

      setPrizeStyle();
      currentPrize.innerHTML = `Ваш текущий выигрыш: ${questionNumber - 1 > -1 ? prizeHtml[questionNumber - 1].innerHTML : 0}`;
      answerHtml.innerHTML = `
            <button>${_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].answers[0]}</button>
            <button>${_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].answers[1]}</button>
            <button>${_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].answers[2]}</button>
            <button>${_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].answers[3]}</button>`;

      for (let i = 0; i < answerHtml.children.length; i++) {
        answerHtml.children[i].addEventListener("click", () => {
          checkAnswer(i + 1);
        });
      }
    } else {
      prize = prizeHtml[14].innerHTML;
      currentPrize.innerHTML = `Ваш текущий выигрыш: ${prize}`;
      congratulate();
    }
  }

  function checkAnswer(a) {
    if (a === _components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].correctAnswer) {
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
    answerHtml.children[_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].correctAnswer - 1].style.color = "gold";
    callFriend.classList.add("used");
  }, {
    once: true
  });
  fiftyFifty.addEventListener("click", () => {
    answerHtml.children[_components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].correctAnswer - 1].style.color = "gold";

    const randAnswer = () => {
      let value = getRandomInt(4);
      return value === _components_questions_js__WEBPACK_IMPORTED_MODULE_0__["default"][questionNumber].correctAnswer - 1 ? randAnswer() : value;
    };

    answerHtml.children[randAnswer()].style.color = "gold";
    fiftyFifty.classList.add("used");
  }, {
    once: true
  });
  withdraw.addEventListener("click", () => {
    prize = questionNumber - 1 > -1 ? prizeHtml[questionNumber - 1].innerHTML : 0;
    congratulate();
  }); // Next.addEventListener("click", () => {
  //     nextQuestion();
  // });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map