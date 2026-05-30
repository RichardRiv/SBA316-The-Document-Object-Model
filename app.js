const questions = [
	{
		question:
			'Which method allows you to set a custom validation message for an input element?',
		options: [
			'setCustomMessage()',
			'setErrorMessage()',
			'setCustomError()',
			'setCustomValidity()',
		],
		answer: 'setCustomValidity()',
	},
];

const form = document.querySelector('#form');
const template = document.querySelector('#question-template');

for (let question of questions) {
	let clone = template.content.cloneNode(true);
	let title = clone.querySelector('#question-title');
	// let optContainer =
	title.textContent = 'Title Test';

	for (option of question.options) {
		let opt = clone.querySelector('#question-opt');
		opt.textContent = option;
	}
}
form.appendChild(clone);
