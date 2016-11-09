import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }



  onSubmit(e) {
    e.preventDefault();
   
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('new-event'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, username, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <TextFieldGroup
          field="username"
          label="Username"
          value={username}
          error={errors.username}
          onChange={this.onChange}
        />


        <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
