import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose } from 'redux';
import {Provider, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// import fbConfig from './config/fbConfig';


// import firebase from 'firebase/app';


var config =  {
    apiKey: "AIzaSyAiVz6Qjep4zx3O8Qc3yWvmbIxUU0OaddU",
    authDomain: "netninja-mario-plan-5e5d3.firebaseapp.com",
    databaseURL: "https://netninja-mario-plan-5e5d3.firebaseio.com",
    projectId: "netninja-mario-plan-5e5d3",
    storageBucket: "netninja-mario-plan-5e5d3.appspot.com",
    messagingSenderId: "877786261661",
    appId: "1:877786261661:web:559823aa2082da6909cc74"
  };

firebase.initializeApp(config);
firebase.firestore().settings({});

const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, config)
    )
   );

const rrfConfig =  {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions'
}

// const rrfProps = {
//     firebase,
//     config: fbConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance
// };

function AuthIsLoaded({children}){
    const auth = useSelector(state => state.firebase.auth);
    if(!isLoaded(auth)) return <div>Loading screen</div>
    return children;
}

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
        <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
