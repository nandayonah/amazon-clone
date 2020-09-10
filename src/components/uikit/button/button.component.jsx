import React from 'react';
import './button.styles.css';

const Button = ({children, fullWidth, size, ...otherProps}) => {
	return (
		<button
			className={`button ${fullWidth ? 'button--full' : ''} ${
				size ? `button--${size}` : ''
			}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
