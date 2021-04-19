import logo from '../../assets/crown.svg';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;//stripe wants value in cents
  const publishableKey = 'pk_test_51Ii6ExIWGTzQm8UwWF7mfw4ZC9gyqLOKmM8TG4Hp4oDU7XkwF2O5GHoZDm1RA31xghOWHnUQkINYZaboltDRJGg600lAaA3RKT';
  const onToken = token => {
    console.log(token)
    alert('Payment Successful');
  };
//TODO: Remove react-stripe-checkout and implement following stripe docs
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;