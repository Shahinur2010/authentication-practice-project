import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-48'>This is a Practice Project</h2>
            {/* <p className='text-center text-lg font-semibold mb-48'>{user.displayName}</p> */}
        </div>
    );
};

export default Home;