const { questions } = require('../src/data/questions.json');
const { calculateFinalScore } = require('../src/helpers/helpers');

(function main() {
	const testResults = {}

	for (let i = 0; i < 100000; i += 1) {
		const attrs = {};

		questions.forEach((question) => {
			const answers = Object.values(question.answers);
			const randomAnswer = answers[Math.floor(Math.random()*answers.length)];

			Object.keys(randomAnswer.attributes).forEach((attribute) => {
				attrs[attribute] = (attrs[attribute] || 0) + randomAnswer.attributes[attribute];
			});
		});

		const { result } = calculateFinalScore(attrs);
		testResults[result] = (testResults[result] || 0) + 1;
	}


	const sortedResults = Object.entries(testResults)
    	.sort(([,a],[,b]) => b-a)
    	.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

	console.log(sortedResults);
})();
