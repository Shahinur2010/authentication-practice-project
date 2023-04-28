import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { signOut } from 'firebase/auth';

const Login = () => {
    const { user, signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')


    const handleLogin = e => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // if (!/(?=.*[A-Z])/.test(password)) {
        //     setError('Please add at least one uppercase');
        //     return;
        // }
        // else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        //     setError('Please add at least two numbers');
        //     return;
        // }
        // else if (password.length < 6) {
        //     setError('Please add at least 6 characters in your password');
        //     return;
        // }

        signIn(email, password)
            .then(res => {
                const signedInUser = res.user;
                console.log(signedInUser)
                setError('');
                setSuccess('User Signed In Successfully')
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })

        console.log(email, password)
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(error => setError(error.message))
    }

    const handleGithub = () => {
        githubSignIn()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser)
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <h2 className='text-center font-semibold text-2xl my-5 text-blue-300'>Please Login here</h2>
            <form onSubmit={handleLogin} className="form-control w-56 mx-auto">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="email" name='email' placeholder="enter your email address" className="input input-bordered mb-2" required />
                </label>
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="password" name='password' placeholder="enter your password" className="input input-bordered mb-2" required />
                </label>
                <button className="btn btn-active btn-primary my-2">Login</button>
                <p><span className='text-green-400'>{success}</span></p>
                <p><span className='text-red-400'>{error}</span></p>
                <button onClick={handleGoogle} className="btn btn-outline btn-success mt-2">Google Login</button>
                <button onClick={handleGithub} className="btn btn-outline btn-success my-2">Github Login</button>
                <button className="btn btn-outline btn-success">Email Login</button>
                <p><small>Don't Have an Account? <Link className='text-blue-300' to='/register'>Register First</Link></small></p>
            </form>
        </div>
    );
};

export default Login;