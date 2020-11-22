import React, { useState } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';

type stateType = {
	countryCode: string;
	phoneNumber: string;
};

const PhoneLoginContainer = () => {
	const [state, setState] = useState<stateType>({
		countryCode: '+82',
		phoneNumber: '010',
	});

	const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const { countryCode, phoneNumber } = state;
		console.log('countryCode ', countryCode);
		console.log('phoneNumber ', phoneNumber);
	};

	const { countryCode, phoneNumber } = state;

	return (
		<PhoneLoginPresenter
			countryCode={countryCode}
			phoneNumber={phoneNumber}
			onInputChange={onInputChange}
			onSubmit={onSubmit}
		/>
	);
};

export default PhoneLoginContainer;
