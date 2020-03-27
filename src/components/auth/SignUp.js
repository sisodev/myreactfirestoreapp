import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        const {auth,  authError} = this.props;
        if(auth.uid) {
            return <Redirect to='/'/>
        }
        return (
            <div className="container">
                <form onSubmit={(e) => this.handleSubmit(e)} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                         <label htmlFor="firstname">Firstname</label>
                         <input type="text" id="firstname" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="lastname">Lastname</label>
                         <input type="text" id="lastname" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" id="email" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                         <div className="red-text center">
                            {authError? <p>{authError}</p>: null}
                         </div>
                     </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newuser) =>  dispatch(signUp(newuser)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
