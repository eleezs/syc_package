/**
 * It logs the error to the console if the environment is not production, otherwise it logs the error to the database and sends it to GCP
 * @param err - The error object that was thrown.
 * @returns A function that takes an error as an argument and logs it to the console if the environment
 * is not production. If the environment is production, it logs the error to the database and sends it to the error reporting service.
 */
const errorHandler = async (err, environment) => {
	if (environment !== 'production') {
		console.log(err);
	} else {
		// createLog ({ severity: 'ERROR', message: err.message || err, log_name: `${environment}-api-error` });
		// errorReporting.report(err, () => {
		// 	console.log('Error Logged!');
		// });
		return true;
	}
};

module.exports = errorHandler;