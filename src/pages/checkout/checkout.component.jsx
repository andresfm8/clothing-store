import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  TotalContainer,
  WarningContainer,
  HeaderBlockContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => 
      <CheckoutItem key={cartItem.id} cartItem={ cartItem }/>
    )}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      Please use the following test credit card for payments: 
      <br/>
      4242 4242 4242 4242 - Exp: 01/22 or any future date - CVV: 123 or any 3 digits
      {/* Verify this is a valid test credit card */}
    </WarningContainer>
    <StripeCheckoutButton price={total}/>
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, 
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);