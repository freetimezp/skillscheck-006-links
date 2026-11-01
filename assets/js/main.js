"use strict";

/* =========================================
   SKILL CHECK 006 — STYLED LINKS
========================================= */

const SKILL_RESULTS_KEY = "freetimezp:roadmap:skill-check-results:v1";

const SKILL_TEST_ID = "006";
const SKILL_TEST_TITLE = "Links, Anchor States & Text Decoration";

const QUESTIONS_PER_TEST = 20;

/* =========================================
   QUESTION DATABASE
   correct: array of option IDs
========================================= */

const questionBank = [
    {
        id: 1,
        category: "ANCHOR BASICS",
        type: "single",
        question: "Which HTML element creates a hyperlink?",
        code: '<a href="https://example.com">Visit website</a>',
        hint: "Think about the element that uses the href attribute.",
        options: [
            { id: "a", text: "<link>" },
            { id: "b", text: "<a>" },
            { id: "c", text: "<href>" },
            { id: "d", text: "<nav>" },
        ],
        correct: ["b"],
        explanation:
            "The <a> element creates hyperlinks. Its href attribute specifies the destination.",
    },
    {
        id: 2,
        category: "ANCHOR BASICS",
        type: "single",
        question: "Which attribute defines where a link navigates?",
        code: '<a href="/about">About</a>',
        hint: "It is the attribute containing the destination URL.",
        options: [
            { id: "a", text: "src" },
            { id: "b", text: "target" },
            { id: "c", text: "href" },
            { id: "d", text: "action" },
        ],
        correct: ["c"],
        explanation:
            "The href attribute contains the URL or destination of an anchor element.",
    },
    {
        id: 3,
        category: "LINK STATES",
        type: "single",
        question: "Which pseudo-class targets an unvisited link?",
        code: "a:link {\n    color: violet;\n}",
        hint: "It represents the initial, unvisited link state.",
        options: [
            { id: "a", text: ":hover" },
            { id: "b", text: ":link" },
            { id: "c", text: ":visited" },
            { id: "d", text: ":active" },
        ],
        correct: ["b"],
        explanation:
            ":link targets links that have not been visited according to the browser's history.",
    },
    {
        id: 4,
        category: "LINK STATES",
        type: "single",
        question: "What does the :visited pseudo-class represent?",
        code: "a:visited {\n    color: purple;\n}",
        hint: "It is related to browser navigation history.",
        options: [
            { id: "a", text: "A link currently under the pointer" },
            { id: "b", text: "A link being pressed" },
            { id: "c", text: "A link previously visited" },
            { id: "d", text: "A link without an href" },
        ],
        correct: ["c"],
        explanation:
            ":visited matches links the browser considers previously visited. Browsers restrict which styles can be changed for privacy.",
    },
    {
        id: 5,
        category: "LINK STATES",
        type: "single",
        question:
            "Which pseudo-class activates when a pointer moves over a link?",
        code: "a:hover {\n    color: coral;\n}",
        hint: "This state is commonly used for mouse interactions.",
        options: [
            { id: "a", text: ":active" },
            { id: "b", text: ":focus" },
            { id: "c", text: ":hover" },
            { id: "d", text: ":visited" },
        ],
        correct: ["c"],
        explanation:
            ":hover matches an element while the pointing device is over it.",
    },
    {
        id: 6,
        category: "LINK STATES",
        type: "single",
        question: "When is the :active state typically applied to a link?",
        code: "a:active {\n    color: white;\n}",
        hint: "Think about the short moment between pressing and releasing.",
        options: [
            { id: "a", text: "While the link is being activated or pressed" },
            { id: "b", text: "After the page has fully loaded" },
            { id: "c", text: "Whenever the link has been visited" },
            { id: "d", text: "Only when using a keyboard" },
        ],
        correct: ["a"],
        explanation:
            ":active matches an element during the moment it is being activated, such as while a mouse button is held down.",
    },
    {
        id: 7,
        category: "LINK STATES",
        type: "single",
        question: "Which order is commonly recommended for link state rules?",
        code: "a:link { }\na:visited { }\na:hover { }\na:active { }",
        hint: "Remember the abbreviation LVHA.",
        options: [
            { id: "a", text: "Hover, Link, Active, Visited" },
            { id: "b", text: "Link, Visited, Hover, Active" },
            { id: "c", text: "Visited, Active, Link, Hover" },
            { id: "d", text: "Active, Hover, Visited, Link" },
        ],
        correct: ["b"],
        explanation:
            "LVHA stands for :link, :visited, :hover, and :active. This order helps avoid later rules unintentionally overriding earlier ones.",
    },
    {
        id: 8,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which CSS property adds an underline to text?",
        code: ".link {\n    /* Add an underline */\n}",
        hint: "You can use the shorthand property for text decoration.",
        options: [
            { id: "a", text: "text-style: underline" },
            { id: "b", text: "font-line: underline" },
            { id: "c", text: "text-decoration: underline" },
            { id: "d", text: "border-text: underline" },
        ],
        correct: ["c"],
        explanation: "text-decoration: underline adds a line beneath the text.",
    },
    {
        id: 9,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which value creates a line above the text?",
        code: ".title {\n    text-decoration-line: ???;\n}",
        hint: "The name describes the position of the line.",
        options: [
            { id: "a", text: "underline" },
            { id: "b", text: "overline" },
            { id: "c", text: "line-through" },
            { id: "d", text: "above-line" },
        ],
        correct: ["b"],
        explanation: "overline draws a decoration line above the text.",
    },
    {
        id: 10,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which value draws a line through the middle of text?",
        code: ".old-price {\n    text-decoration-line: ???;\n}",
        hint: "This is often used to indicate an old price.",
        options: [
            { id: "a", text: "overline" },
            { id: "b", text: "underline" },
            { id: "c", text: "line-through" },
            { id: "d", text: "middle-line" },
        ],
        correct: ["c"],
        explanation:
            "line-through draws a line through the text, commonly used for deleted or outdated content.",
    },
    {
        id: 11,
        category: "TEXT DECORATION",
        type: "multiple",
        question: "Which values are valid text-decoration-style values?",
        code: ".link {\n    text-decoration-style: ???;\n}",
        hint: "Select every valid line style.",
        options: [
            { id: "a", text: "solid" },
            { id: "b", text: "dashed" },
            { id: "c", text: "dotted" },
            { id: "d", text: "wavy" },
            { id: "e", text: "blurred" },
        ],
        correct: ["a", "b", "c", "d"],
        explanation:
            "Common valid values include solid, double, dotted, dashed, and wavy. blurred is not a text-decoration-style value.",
    },
    {
        id: 12,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which property changes the color of a text decoration line?",
        code: ".link {\n    text-decoration-line: underline;\n    /* Change line color */\n}",
        hint: "The property name specifically mentions decoration color.",
        options: [
            { id: "a", text: "text-color" },
            { id: "b", text: "underline-color" },
            { id: "c", text: "text-decoration-color" },
            { id: "d", text: "border-color" },
        ],
        correct: ["c"],
        explanation:
            "text-decoration-color controls the color of the text decoration line.",
    },
    {
        id: 13,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which property controls the thickness of an underline?",
        code: ".link {\n    text-decoration-line: underline;\n    text-decoration-thickness: 3px;\n}",
        hint: "Look at the property shown in the example.",
        options: [
            { id: "a", text: "text-decoration-thickness" },
            { id: "b", text: "border-width" },
            { id: "c", text: "font-weight" },
            { id: "d", text: "text-line-size" },
        ],
        correct: ["a"],
        explanation:
            "text-decoration-thickness controls the thickness of the decoration line.",
    },
    {
        id: 14,
        category: "TEXT DECORATION",
        type: "single",
        question: "What does text-underline-offset control?",
        code: ".link {\n    text-decoration: underline;\n    text-underline-offset: 6px;\n}",
        hint: "It changes the distance between the text and its underline.",
        options: [
            { id: "a", text: "The link's horizontal position" },
            { id: "b", text: "The distance between text and underline" },
            { id: "c", text: "The underline's color" },
            { id: "d", text: "The text's font size" },
        ],
        correct: ["b"],
        explanation:
            "text-underline-offset controls how far the underline is positioned from the text.",
    },
    {
        id: 15,
        category: "TEXT DECORATION",
        type: "single",
        question: "Which property can create a wavy underline?",
        code: ".link {\n    text-decoration-line: underline;\n    text-decoration-style: ???;\n}",
        hint: "It is one of the line-style values.",
        options: [
            { id: "a", text: "wave" },
            { id: "b", text: "curved" },
            { id: "c", text: "wavy" },
            { id: "d", text: "ripple" },
        ],
        correct: ["c"],
        explanation:
            "text-decoration-style: wavy creates a wave-shaped decoration line.",
    },
    {
        id: 16,
        category: "ACCESSIBILITY",
        type: "single",
        question: "Why should a link have a visible keyboard focus indicator?",
        code: "a:focus-visible {\n    outline: 2px solid coral;\n}",
        hint: "Think about visitors navigating without a mouse.",
        options: [
            { id: "a", text: "To make the page load faster" },
            {
                id: "b",
                text: "To show keyboard users which element is focused",
            },
            { id: "c", text: "To change the link destination" },
            { id: "d", text: "To prevent links from being visited" },
        ],
        correct: ["b"],
        explanation:
            "A visible focus indicator helps keyboard users understand which interactive element currently has focus.",
    },
    {
        id: 17,
        category: "ACCESSIBILITY",
        type: "single",
        question: "What is the purpose of :focus-visible?",
        code: "a:focus-visible {\n    outline: 2px solid coral;\n}",
        hint: "It is related to focus indication and user interaction methods.",
        options: [
            {
                id: "a",
                text: "It styles elements when keyboard focus should be visibly indicated",
            },
            { id: "b", text: "It styles only visited links" },
            { id: "c", text: "It removes the browser focus outline" },
            { id: "d", text: "It styles links only when hovered" },
        ],
        correct: ["a"],
        explanation:
            ":focus-visible lets you style focus indicators when the browser determines that visible focus feedback is appropriate, commonly during keyboard navigation.",
    },
    {
        id: 18,
        category: "ACCESSIBILITY",
        type: "multiple",
        question: "Which practices help make links more accessible?",
        code: "a:focus-visible {\n    outline: 2px solid coral;\n}",
        hint: "Choose every helpful practice.",
        options: [
            { id: "a", text: "Use meaningful link text" },
            { id: "b", text: "Provide visible keyboard focus" },
            { id: "c", text: "Use color as the only link indicator" },
            { id: "d", text: "Keep links visually recognizable" },
        ],
        correct: ["a", "b", "d"],
        explanation:
            "Meaningful link text, visible focus feedback, and recognizable link styling all improve accessibility. Color alone should not be the only way to identify a link.",
    },
    {
        id: 19,
        category: "CSS PRACTICE",
        type: "single",
        question:
            "Which selector changes a link's appearance while it is hovered and also increases its underline thickness?",
        code: ".menu a:hover {\n    color: coral;\n    text-decoration-thickness: 2px;\n}",
        hint: "Look at the pseudo-class in the selector.",
        options: [
            { id: "a", text: ".menu a:visited" },
            { id: "b", text: ".menu a:active" },
            { id: "c", text: ".menu a:hover" },
            { id: "d", text: ".menu a:link" },
        ],
        correct: ["c"],
        explanation:
            ":hover targets a link while the pointer is over it. The declaration changes the text color and decoration thickness.",
    },
    {
        id: 20,
        category: "CSS PRACTICE",
        type: "multiple",
        question: "Which declarations can be used to customize an underline?",
        code: ".link {\n    text-decoration-line: underline;\n    /* Add your customization */\n}",
        hint: "Select all properties that control the underline's appearance or position.",
        options: [
            { id: "a", text: "text-decoration-color" },
            { id: "b", text: "text-decoration-style" },
            { id: "c", text: "text-decoration-thickness" },
            { id: "d", text: "text-underline-offset" },
            { id: "e", text: "text-decoration-speed" },
        ],
        correct: ["a", "b", "c", "d"],
        explanation:
            "These four properties customize the underline's color, pattern, thickness, and distance from the text. text-decoration-speed is not a CSS property.",
    },
];

/* =========================================
   DOM ELEMENTS
========================================= */

const elements = {
    intro: document.querySelector("#intro"),
    quiz: document.querySelector("#quizSection"),
    results: document.querySelector("#resultsSection"),

    start: document.querySelector("#startButton"),
    retry: document.querySelector("#retryButton"),
    restart: document.querySelector("#restartButton"),

    currentNumber: document.querySelector("#currentQuestionNumber"),
    total: document.querySelector("#totalQuestions"),
    progress: document.querySelector("#progressFill"),
    questionType: document.querySelector("#questionType"),
    answeredCount: document.querySelector("#answeredCount"),

    category: document.querySelector("#questionCategory"),
    question: document.querySelector("#questionText"),
    codeBox: document.querySelector("#questionCode"),
    code: document.querySelector("#questionCodeText"),
    hint: document.querySelector("#questionHint"),
    answers: document.querySelector("#answerList"),

    feedback: document.querySelector("#answerFeedback"),
    feedbackIcon: document.querySelector("#feedbackIcon"),
    feedbackTitle: document.querySelector("#feedbackTitle"),
    feedbackText: document.querySelector("#feedbackText"),

    check: document.querySelector("#checkButton"),
    next: document.querySelector("#nextButton"),

    resultTitle: document.querySelector("#resultTitle"),
    resultDescription: document.querySelector("#resultDescription"),
    finalScore: document.querySelector("#finalScore"),
    finalPercentage: document.querySelector("#finalPercentage"),
    correctCount: document.querySelector("#correctCount"),
    incorrectCount: document.querySelector("#incorrectCount"),
    circlePercentage: document.querySelector("#circlePercentage"),
    resultCircle: document.querySelector("#resultCircle"),
    storageNote: document.querySelector("#storageNote"),
};

/* =========================================
   QUIZ STATE
========================================= */

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswersCount = 0;
let hasAnswered = false;
let resultSaved = false;

let selectedAnswers = new Set();

/* =========================================
   HELPERS
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function formatQuestionNumber(number) {
    return String(number).padStart(2, "0");
}

function updateProgress() {
    const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

    elements.progress.style.width = `${progress}%`;

    elements.currentNumber.textContent = formatQuestionNumber(currentIndex + 1);

    elements.total.textContent = String(quizQuestions.length);

    const answered = quizQuestions.filter(
        (question, index) =>
            index < currentIndex || (index === currentIndex && hasAnswered),
    ).length;

    elements.answeredCount.textContent = `${answered} / ${quizQuestions.length} ANSWERED`;
}

/* =========================================
   LOCAL STORAGE
========================================= */

function saveSkillCheckResult(scoreValue, total, percentage) {
    try {
        const stored = localStorage.getItem(SKILL_RESULTS_KEY);
        const data = stored ? JSON.parse(stored) : {};

        const tests =
            data.tests && typeof data.tests === "object" ? data.tests : {};

        const previous = tests[SKILL_TEST_ID] || {};

        const completedAt = new Date().toISOString();

        const attempt = {
            score: scoreValue,
            total,
            percentage,
            completedAt,
        };

        const previousBest = previous.best;

        const best =
            !previousBest || percentage >= Number(previousBest.percentage)
                ? attempt
                : previousBest;

        const history = Array.isArray(previous.history) ? previous.history : [];

        tests[SKILL_TEST_ID] = {
            testId: SKILL_TEST_ID,
            title: SKILL_TEST_TITLE,
            attempts: (Number(previous.attempts) || 0) + 1,
            latest: attempt,
            best,
            history: [...history, attempt].slice(-10),
        };

        localStorage.setItem(
            SKILL_RESULTS_KEY,
            JSON.stringify({
                schemaVersion: 1,
                updatedAt: completedAt,
                tests,
            }),
        );

        return true;
    } catch (error) {
        console.warn("Could not save skill-check results:", error);

        return false;
    }
}

/* =========================================
   START / RESTART
========================================= */

function startQuiz() {
    quizQuestions = shuffleArray(questionBank)
        .slice(0, QUESTIONS_PER_TEST)
        .map((question) => ({
            ...question,
            options: shuffleArray(question.options),
        }));

    currentIndex = 0;
    score = 0;
    correctAnswersCount = 0;
    hasAnswered = false;
    resultSaved = false;
    selectedAnswers = new Set();

    elements.intro.hidden = true;
    elements.results.hidden = true;
    elements.quiz.hidden = false;

    renderQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {
    const question = quizQuestions[currentIndex];

    hasAnswered = false;
    selectedAnswers = new Set();

    elements.category.textContent = question.category;
    elements.question.textContent = question.question;
    elements.hint.textContent = question.hint || "";

    elements.questionType.textContent =
        question.type === "multiple"
            ? "MULTIPLE ANSWERS — SELECT ALL THAT APPLY"
            : "SINGLE ANSWER — SELECT ONE";

    if (question.code) {
        elements.codeBox.hidden = false;
        elements.code.textContent = question.code;
    } else {
        elements.codeBox.hidden = true;
        elements.code.textContent = "";
    }

    elements.feedback.hidden = true;
    elements.feedback.classList.remove("is-wrong");

    elements.check.hidden = false;
    elements.check.disabled = true;
    elements.next.hidden = true;

    elements.answers.innerHTML = "";

    const inputType = question.type === "multiple" ? "checkbox" : "radio";

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "answer-option";

        const input = document.createElement("input");
        input.type = inputType;
        input.name = `question-${question.id}`;
        input.value = option.id;
        input.setAttribute("aria-label", option.text);

        const marker = document.createElement("span");
        marker.className = "option-marker";
        marker.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option.text;

        input.addEventListener("change", () => {
            if (hasAnswered) return;

            if (question.type === "single") {
                selectedAnswers.clear();
                selectedAnswers.add(option.id);
            } else {
                if (input.checked) {
                    selectedAnswers.add(option.id);
                } else {
                    selectedAnswers.delete(option.id);
                }
            }

            elements.check.disabled = selectedAnswers.size === 0;
        });

        label.append(input, marker, text);
        elements.answers.appendChild(label);
    });

    updateProgress();
}

/* =========================================
   CHECK ANSWER
========================================= */

function isAnswerCorrect(question) {
    const correct = [...question.correct].sort();
    const selected = [...selectedAnswers].sort();

    return (
        correct.length === selected.length &&
        correct.every((answer, index) => answer === selected[index])
    );
}

function checkAnswer() {
    if (hasAnswered || selectedAnswers.size === 0) return;

    hasAnswered = true;

    const question = quizQuestions[currentIndex];
    const correct = isAnswerCorrect(question);

    if (correct) {
        score++;
        correctAnswersCount++;
    }

    elements.check.hidden = true;
    elements.next.hidden = false;

    elements.feedback.hidden = false;
    elements.feedback.classList.toggle("is-wrong", !correct);

    elements.feedbackIcon.textContent = correct ? "✓" : "×";
    elements.feedbackTitle.textContent = correct
        ? "Correct answer!"
        : "Not quite. Keep learning!";

    elements.feedbackText.textContent = question.explanation;

    // Lock all options and show the correct answers.
    const optionLabels = elements.answers.querySelectorAll(".answer-option");

    optionLabels.forEach((label) => {
        const input = label.querySelector("input");
        const optionId = input.value;

        input.disabled = true;
        label.classList.add("is-disabled");

        if (question.correct.includes(optionId)) {
            label.classList.add("is-correct");
            label.querySelector(".option-marker").textContent = "✓";
        } else if (selectedAnswers.has(optionId)) {
            label.classList.add("is-incorrect");
            label.querySelector(".option-marker").textContent = "×";
        }
    });

    if (currentIndex === quizQuestions.length - 1) {
        elements.next.innerHTML =
            'VIEW RESULTS <span aria-hidden="true">→</span>';
    } else {
        elements.next.innerHTML =
            'NEXT QUESTION <span aria-hidden="true">→</span>';
    }

    updateProgress();
}

/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {
    if (!hasAnswered) return;

    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        renderQuestion();

        return;
    }

    showResults();
}

/* =========================================
   RESULTS
========================================= */

function showResults() {
    elements.quiz.hidden = true;
    elements.results.hidden = false;

    const total = quizQuestions.length;

    const percentage = Math.round((score / total) * 100);

    elements.finalScore.textContent = String(score);
    elements.finalPercentage.textContent = `${percentage}%`;
    elements.correctCount.textContent = String(correctAnswersCount);

    elements.incorrectCount.textContent = String(total - correctAnswersCount);

    elements.circlePercentage.textContent = `${percentage}%`;

    let title = "Keep exploring";
    let description = "Every attempt helps you understand CSS a little better.";

    if (percentage >= 90) {
        title = "Outstanding!";
        description =
            "Excellent work. You have a strong understanding of link states, text decoration, and accessibility.";
    } else if (percentage >= 75) {
        title = "Great work!";
        description =
            "You understand most of the concepts. Review a few details and keep building.";
    } else if (percentage >= 50) {
        title = "Good progress!";
        description =
            "You are getting there. Revisit the lesson examples and try the skill check again.";
    }

    elements.resultTitle.textContent = title;
    elements.resultDescription.textContent = description;

    // Animate the score circle.
    requestAnimationFrame(() => {
        const circumference = 2 * Math.PI * 94;
        const offset = circumference - (percentage / 100) * circumference;

        elements.resultCircle.style.strokeDasharray = String(circumference);

        elements.resultCircle.style.strokeDashoffset = String(offset);
    });

    if (!resultSaved) {
        const saved = saveSkillCheckResult(score, total, percentage);

        elements.storageNote.innerHTML = saved
            ? '<span class="storage-dot"></span> YOUR BEST SCORE IS SAVED IN THIS BROWSER'
            : '<span class="storage-dot"></span> RESULTS COULD NOT BE SAVED — CHECK BROWSER STORAGE SETTINGS';

        resultSaved = true;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

/* =========================================
   EVENT LISTENERS
========================================= */

elements.start.addEventListener("click", startQuiz);
elements.retry.addEventListener("click", startQuiz);
elements.restart.addEventListener("click", () => {
    const shouldRestart = window.confirm(
        "Restart this skill check? Your current attempt will not be saved.",
    );

    if (shouldRestart) {
        startQuiz();
    }
});

elements.check.addEventListener("click", checkAnswer);
elements.next.addEventListener("click", nextQuestion);

/* =========================================
   INITIAL STATE
========================================= */

elements.total.textContent = String(QUESTIONS_PER_TEST);
