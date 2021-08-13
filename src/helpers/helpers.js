const ssgs = require('./src/data/ssgs.json');

const helpers = {
	calculateFinalScore: function (attributeScores) {
		Object.keys(ssgs).forEach((ssg) => {
			ssg.score = 0;
			ssg.attributes.forEach((ssgAttribute) => {
				ssgs.score = ssgs.score + (attributeScores[ssgAttribute] || 0);
			})
		})

		// find max score
		const result = Object.keys(ssgs).reduce((acc, curr) => {
			return ssgs[curr].score > ssgs[acc].score ? curr : acc
		}, '')

		return result;
	}
};

module.exports = helpers;
