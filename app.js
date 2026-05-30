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
];

const form = document.querySelector('#form');
const template = document.querySelector('#question-template');

for (let question of questions) {
	let clone = template.content.cloneNode(true);
	let title = clone.querySelector('#question-title');
	title.textContent = `${question.id}. ${question.questionTitle}`;

	let radiosContainer = clone.querySelector('.radios-container');
	for (option of question.options) {
		let divEl = document.createElement('div');
		let inputEl = document.createElement('input');
		let labelEl = document.createElement('label');

		divEl.style.display = 'flex';
		divEl.style.gap = '10px';
		inputEl.type = 'radio';
		inputEl.id = option;
		inputEl.name = `question-${question.id}`;
		inputEl.value = option;
		labelEl.setAttribute('for', option);
		labelEl.textContent = option;

		divEl.appendChild(inputEl);
		divEl.appendChild(labelEl);
		radiosContainer.appendChild(divEl);
	}

	form.appendChild(clone);
}

form.lastElementChild.style.paddingBottom = '30px';
