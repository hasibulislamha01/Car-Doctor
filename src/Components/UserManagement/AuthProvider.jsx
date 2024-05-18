import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    // user observer
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('user in the on Auth state :', currentUser)
                setUser(currentUser)
                const userCredentials = {email: currentUser.email}
                console.log(userCredentials)

                // issuing a token
                axios.post('http://localhost:5000/jwt',userCredentials, {withCredentials: true} )
                .then(res=> {
                    console.log(res.data)
                })
            }
            else {
                console.log('User is unavailable')
                setUser(null)
            }
        })
    }, [user])

    // Create or register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // get user profile
    // const createUserProfile = () => {
    //     const signedUser = auth.currentUser;
    //     if(user !== null){
    //         const displayName = user.displayName;
    //         const email = user.email;
    //         const photoURL = user.photoURL;
    //         const emailVerified = user.emailVerified;
    //     }
    // }


    // update a user 
    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }


    // Login user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google
    const loginWithGoogle = (provider) => {
        signInWithPopup(auth, provider)
    }

    // Sign Out user
    const logoutUser = () => {
        signOut(auth)
    }


    const authData = {
        createUser,
        signInUser,
        loginWithGoogle,
        logoutUser,
        updateUser,
        user,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;