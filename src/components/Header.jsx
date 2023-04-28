import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, signedOutUser } = useContext(AuthContext)

    const handleSignOut = ()=>{
    signedOutUser()
        .then(() => {
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <div className='flex justify-evenly bg-zinc-300 p-10 font-semibold text-lg'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {user? <><span>{user.email}</span><button onClick={handleSignOut} className="btn btn-primary">LogOut</button></> : <Link to='/login'>Profile</Link>}
           {user && <Link to='/special' className="btn btn-primary" >Special</Link>}
        </div>
    );
};

export default Header;