import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
		const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(`${countryCode}${phoneNumber}`);

		if (isValid) {
			toast.success('ok');
			return;
		} else {
			toast.error('잘못된 핸드폰 번호 입니다.');
		}
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
