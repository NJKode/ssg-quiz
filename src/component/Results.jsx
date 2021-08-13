import React, { useEffect, useState } from "react";
const { calculateFinalScore } = require('../helpers/helpers');

function Results({ userAttributes }) {
	const [finalResult, setResult] = useState('');
	useEffect(() => {
		const result = calculateFinalScore(userAttributes);
		setResult(result);
	}, []);

	return (
		<div><h3>You're {finalResult}</h3></div>
	  );
}

export default Results;