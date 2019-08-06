import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            RegisterEmail: '',
            RegisterPassword: '',
            RegisterName: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({
            RegisterEmail: e.target.value
        })
    }
    onPasswordChange = (e) => {
        this.setState({
            RegisterPassword: e.target.value
        })
    }
    onNameChange = (e) => {
        this.setState({
            RegisterName: e.target.value
        })
    }

    onSubmitRegister = () => {
        fetch('https://enigmatic-stream-62550.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: this.state.RegisterEmail,
               name: this.state.RegisterName,
               password: this.state.RegisterPassword 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.props.loadUser(data)
                this.props.onRouteChange('home')
            }
        })
        
    }


    render(){
        return (
        <article className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
            <main className="pa4 black-80 tc">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input 
                            onChange={this.onNameChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="Name">Email</label>
                            <input 
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Name" name="Name"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="submit" value="Register" />
                        </div>
                        
                </div>
            </main>
        </article>
    )}
}

export default Register;