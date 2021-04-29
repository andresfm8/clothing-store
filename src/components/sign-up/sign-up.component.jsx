import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    
    if(password !== confirmPassword) {
      alert ("Passwords don't match");
      return
    }

    signUpStart({ 
      email, 
      password, 
      displayName 
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text"
            name="displayName"
            value={displayName}  
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput 
            type="email"
            name="email"
            value={email}  
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput 
            type="password"
            name="password"
            value={password}  
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}  
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);