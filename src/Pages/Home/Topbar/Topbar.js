import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="container  d-flex justify-content-between">
                <div className='d-flex p-0 align-items-center gap-1 '>
                    <p className='m-2'>Winter awsome sale 30% off.</p>
                    <Link to={'/'} className='topbar-link'> Shop Now</Link>
                </div>
                <div className='d-flex p-0 align-items-center'>
                    <div className='border-end'>
                        <label htmlFor="currency">Currency:</label>
                        <select name="currency" id="currency">
                            <option value="usd">$USD</option>
                            <option value="bdt">&#2547;BDT</option>
                        </select>
                    </div>
                    <div className='ps-2'>
                        <label htmlFor="language">Language:</label>
                        <select name="language" id="language">
                            <option value="english">English</option>
                            <option value="english">Bangla</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;