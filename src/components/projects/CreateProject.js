import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid){
            return <Redirect to='/signin'/>
        }

        return (
            <div className="container">
                <form onSubmit={(e) => this.handleSubmit(e)} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                     <div className="input-field">
                         <label htmlFor="title">Title</label>
                         <input type="text" id="title" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="content">Project Content</label>
                         <textarea  id="content" className="materialize-textarea" onChange={(e) => this.handleChange(e)}/>
                     </div>
                     <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                     </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
