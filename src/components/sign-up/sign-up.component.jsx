import React from 'react';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "signup"
    }
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default SignUp;