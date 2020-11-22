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

	const { countryCode, phoneNumber } = state;

	return <PhoneLoginPresenter countryCode={countryCode} phoneNumber={phoneNumber} />;
};

export default PhoneLoginContainer;
