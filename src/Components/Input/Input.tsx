import React from 'react';
import styled from '../../typed-components';

const Container = styled.input`
	border: none;
	border-bottom: 2px solid ${(props) => props.theme.greyColor};
	font-size: 20px;
	width: 100%;
	padding-bottom: 10px;
	font-weight: 500;
	transition: border-bottom 0.1s linear;
	&:-webkit-autofill {
		box-shadow: 0 0 0px 1000px white inset !important;
	}
	&:focus {
		border-bottom-color: #2c3e50;
		outline: none;
	}
	&::placeholder {
		color: ${(props) => props.theme.greyColor};
		font-weight: 300;
	}
`;

type InputType = {
	type?: string;
	value: any;
	name?: string;
	placeholder?: string;
	required?: boolean;
	onChange?: any;
};

const Input = ({
	type = 'text',
	value,
	name,
	placeholder,
	required = false,
	onChange,
}: InputType) => {
	return (
		<Container
			type={type}
			value={value}
			name={name && name}
			placeholder={placeholder && placeholder}
			required={required}
			onChange={onChange && onChange}
		/>
	);
};

export default Input;
