import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {

    const {user, createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

    createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            verificationOfEmail(result.user)
            form.reset()
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    const verificationOfEmail = (user) =>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            alert('Please input valid email address')
        })
    }


    return (
        <div>
            <h2 className='text-center font-semibold text-2xl my-5 text-blue-300'>Please Register</h2>
            <form onSubmit={handleRegister} className="form-control w-56 mx-auto">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Name</span>
                    <input type="text" name='name' placeholder="enter your name" className="input input-bordered mb-2 " required />
                </label>
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
                <button className="btn btn-active btn-primary my-2">Register</button>
                <p><small>Already Have an Account? <Link className='text-blue-300' to='/login'>Login</Link></small></p>
            </form>
        </div>
    );
};

export default Register;