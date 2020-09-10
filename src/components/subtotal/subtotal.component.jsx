import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.styles.css';
import Button from '../uikit/button/button.component';

const Subtotal = ({subtotal, itemsCount}) => {
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({itemsCount} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains gift
						</small>
					</>
				)}
				decimalScale={2}
				value={subtotal}
				displayType="text"
				thousandSeparator={true}
				prefix="$"
			/>

			<Button>Proceed to Checkout</Button>
		</div>
	);
};

export default Subtotal;
