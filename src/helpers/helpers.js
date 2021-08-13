const ssgs = require('../data/ssgs.json');

const helpers = {
	calculateFinalScore: function (attributeScores) {
		const finalScore = {};
		Object.keys(ssgs).forEach((ssg) => {
			finalScore[ssg] = 0;
			ssgs[ssg].attributes.forEach((ssgAttribute) => {
				finalScore[ssg] = finalScore[ssg] + (attributeScores[ssgAttribute] || 0);
			})
		})

		// find max score
		const result = Object.keys(finalScore).reduce((acc, curr) => {
			return finalScore[curr] > (finalScore[acc] || 0) ? curr : acc
		}, '')

		return result;
	}
};

module.exports = helpers;
