const questions = [
	{
		id: 1,
		questionTitle:
			'Which method allows you to set a custom validation message for an input element?',
		options: [
			'setCustomMessage()',
			'setErrorMessage()',
			'setCustomError()',
			'setCustomValidity()',
		],
		answer: 'setCustomValidity()',
	},
	{
		id: 2,
		questionTitle:
			"If you want to reset a form's input fields to their default values, which method would you use?",
		options: ['setDefault()', 'empty()', 'clear()', 'reset()'],
		answer: 'reset()',
	},
	{
		id: 3,
		questionTitle: 'Which event is fired when a key is first pressed down?',
		options: ['keyStart()', 'keyPress()', 'keyInit()', 'keyDown()'],
		answer: 'keyDown()',
	},
	{
		id: 4,
		questionTitle:
			'Which property of the event object references the DOM element that initiated the event?',
		options: [
			'event.target',
			'event.origin',
			'event.initiator',
			'event.source',
		],
		answer: 'event.target',
	},
	{
		id: 5,
		questionTitle:
			'If you have an event listener on a parent element, using event delegation, which property can help determine which child element was the target of an event?',
		options: ['event.target', 'event.origin', 'event.source', 'event.child'],
		answer: 'event.target',
	},
	{
		id: 6,
		questionTitle:
			'Which method would you use to create a new element in the DOM?',
		options: [
			'document.appendElement()',
			'document.createElement()',
			'document.add()',
			'document.newElement()',
		],
		answer: 'document.createElement()',
	},
	{
		id: 7,
		questionTitle:
			'Which method returns a NodeList of elements with a specified class name?',
		options: [
			'document.getElementsByClassName()',
			'document.querySelector()',
			'document.getClassElements()',
			'document.getElementsByClass()',
		],
		answer: 'document.getElementsByClassName()',
	},
	{
		id: 8,
		questionTitle:
			'Which property can be used to determine whether a checkbox input is selected?',
		options: ['chosen', 'checked', 'selected', 'state'],
		answer: 'checked',
	},
	{
		id: 9,
		questionTitle:
			'Which method can be used to execute a piece of code at regular intervals?',
		options: [
			'window.setInterval()',
			'window.setTimeout()',
			'window.executeInterval()',
			'window.timeLoop()',
		],
		answer: 'window.setInterval()',
	},
	{
		id: 10,
		questionTitle:
			'Which of the following best describes the Browser Object Model?',
		options: [
			'A protocol for transferring web pages',
			'An interface for manipulating HTML documents from JavaScript',
			'An interface for interacting with the browser environment from JavaScript',
			'An interface for manipulating CSS styles from JavaScript',
		],
		answer:
			'An interface for interacting with the browser environment from JavaScript',
	},
	{
		id: 11,
		questionTitle:
			'What is the primary purpose of the window.navigator object?',
		options: [
			"To interface with the computer's file system",
			'To handle navigation requests to other pages',
			"To navigate the browser's history",
			'To provide information about the web browser and its capabilities',
		],
		answer: 'To provide information about the web browser and its capabilities',
	},
	{
		id: 12,
		questionTitle:
			'What method can be called on a form element to programmatically submit it?',
		options: ['post()', 'submit()', 'send()', 'finalize()'],
		answer: 'submit()',
	},
];

const questionsLength = document.getElementById('questions-length');
questionsLength.textContent = questions.length;

const form = document.querySelector('#form');
const template = document.querySelector('#question-template');

for (let question of questions) {
	const clone = template.content.cloneNode(true);
	const title = clone.querySelector('#question-title');
	title.textContent = `${question.id}. ${question.questionTitle}`;

	const radiosContainer = clone.querySelector('.radios-container');
	for (option of question.options) {
		const divEl = document.createElement('div');
		const inputEl = document.createElement('input');
		const labelEl = document.createElement('label');

		divEl.style.display = 'flex';
		divEl.style.gap = '10px';
		inputEl.type = 'radio';
		inputEl.id = `${option}-${question.id}`;
		inputEl.name = `question-${question.id}`;
		inputEl.value = option;
		inputEl.required = true;
		labelEl.setAttribute('for', `${option}-${question.id}`);
		labelEl.textContent = option;

		divEl.appendChild(inputEl);
		divEl.appendChild(labelEl);
		radiosContainer.appendChild(divEl);
	}

	form.appendChild(clone);
}
form.lastElementChild.style.paddingBottom = '30px';

const divEl = document.createElement('div');
const btnEl = document.createElement('button');

divEl.style.position = 'relative';
divEl.style.height = '30px';
btnEl.textContent = 'Submit!';
btnEl.style.position = 'absolute';
btnEl.style.right = '0';
btnEl.style.padding = '5px';
btnEl.style.cursor = 'pointer';

divEl.appendChild(btnEl);
form.appendChild(divEl);

const submitForm = (e) => {
	e.preventDefault();

	const userAnswers = questions.map((question) => {
		const selected = form.querySelector(
			`input[name="question-${question.id}"]:checked`,
		);
		const isCorrect = selected.value === question.answer;

		selected.parentElement.style.border = isCorrect
			? '5px solid green'
			: '5px solid red';

		return {
			id: question.id,
			selected: selected.value,
			isCorrect,
		};
	});

	let answersCorrect = 0;
	userAnswers.forEach((answer) => {
		if (answer.isCorrect) answersCorrect++;
	});

	const maxPossibleScore = 100;
	const questionCount = questions.length;
	const score = (answersCorrect / questionCount) * maxPossibleScore;

	const percentageEl = document.querySelector('#percentage');
	const questionsCorrectEl = document.querySelector('#questions-correct');

	percentageEl.textContent = `${score.toFixed(2)}%`;
	questionsLength.textContent = questions.length;
	questionsCorrectEl.textContent = answersCorrect;

	const res = document.querySelector('#results-invisible');
	res.classList = 'score-time';
};

form.addEventListener('submit', submitForm);
