export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make the async calls
        const firestore = getFirestore();
        const {firstName, lastName} = getState().firebase.profile
        const {uid} = getState().firebase.auth
        firestore.collection('projects').add({
            ...project,
            authorFirstName: firstName,
            authorLastName: lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
       
    }
}