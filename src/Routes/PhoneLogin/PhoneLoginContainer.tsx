import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { PHONE_SIGN_IN } from './PhoneQueries.queries';

type stateType = {
	countryCode: string;
	phoneNumber: string;
};

interface IMutationInterface {
	phoneNumber: string;
}

// class PhoneSignInMutation extends Mutation<any, IMutationInterface> {}

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

	// const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
	// 	e.preventDefault();
	// 	const { countryCode, phoneNumber } = state;
	// 	const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(`${countryCode}${phoneNumber}`);

	// 	if (isValid) {
	// 		toast.success('ok');
	// 		return;
	// 	} else {
	// 		toast.error('잘못된 핸드폰 번호 입니다.');
	// 	}
	// };

	const { countryCode, phoneNumber } = state;

	return (
		<Mutation<any, IMutationInterface>
			mutation={PHONE_SIGN_IN}
			variables={{
				phoneNumber: `${countryCode}${phoneNumber}`,
			}}
		>
			{(mutation, { loading }) => {
				const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
					event.preventDefault();
					const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(`${countryCode}${phoneNumber}`);
					if (isValid) {
						alert('??');
						mutation();
					} else {
						toast.error('Please write a valid phone number');
					}
				};
				return (
					<PhoneLoginPresenter
						countryCode={countryCode}
						phoneNumber={phoneNumber}
						onInputChange={onInputChange}
						onSubmit={onSubmit}
						loading={loading}
					/>
				);
			}}
		</Mutation>
	);
};

export default PhoneLoginContainer;
