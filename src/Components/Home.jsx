import React from 'react'
import './Home.css'
import { useAuth } from '../Context/AuthProvider';

const Home = () => {
    const { logOut } = useAuth();
    return (
        <div className='page-center'>
            <div className="home">
                <div className="">
                    Home
                </div>
                <div className="">
                    <button type="button" className='logOut' onClick={logOut}>
                        <div className="_9_68 _9_6b _9_6h _9_6j _9_6x">Log Out</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home