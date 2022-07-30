import { useState } from "react";

export function useAsync (cb, defaultValue = []) {
	const [status, setStatus] = useState ('IDLE');
	const [data, setData] = useState (defaultValue);

	function run () {
		setStatus ("LOADING");

		cb ()
			.then ((resp) => {
				setStatus ("DONE");
				setData (resp.data);
				return data;
			})
			.catch ((error) => {
				setStatus ("ERROR");
				return Promise.reject (error);
			});
	}

	return {
		status,
		data,
		setData,
		run,
	};
}