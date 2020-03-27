import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';

class Dashboard  extends Component {
    
    render() {
        const { projects, notifications, auth } = this.props
        if(!auth.uid){
            return <Redirect to='/signin'/>
        }
        return (
            <div className="dashboaed contaier">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                            <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

export default compose(firestoreConnect([
    {collection: 'projects', limit: 3, orderBy: ['createdAt', 'desc']},
    {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ]),connect(mapStateToProps))(Dashboard)