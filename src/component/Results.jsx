import React, { useEffect, useState } from "react";
const { calculateFinalScore } = require('../helpers/helpers');

function Results({ userAttributes }) {
	const [finalResult, setResult] = useState({});
	useEffect(() => {
		const result = calculateFinalScore(userAttributes);
		setResult(result);
	}, []);

	return (
		<div class="results">
			<div><h3>You're { finalResult.result }!</h3></div>
			<div>
				<span>
					{ finalResult.description }
				</span>
			</div>
		</div>
	  );
}

export default Results;
