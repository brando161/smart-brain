import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch("https://smart-brain-api-zbd7.onrender.com/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('Home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main class="pa4 black-80">
                    <div class="measure">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f1 fw6 ph0 mh0">Sign In</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" htmlForfor="email-address">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}/>
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" htmlForfor="password">Password</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}/>
                            </div>
                        </fieldset>
                        <div class="">
                            <input 
                            onClick={ this.onSubmitSignIn }
                            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" 
                            />
                        </div>
                        <div class="lh-copy mt3">
                            <p onClick={() => onRouteChange('Register')} class="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default SignIn;