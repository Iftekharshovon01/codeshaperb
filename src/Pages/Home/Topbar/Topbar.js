import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";

const Topbar = () => {
    return (
        <div className='topbar '>
            <div className="container  d-flex justify-content-between">
                <div className='d-flex p-0 align-items-center gap-1 '>
                    <p className='m-2'>Winter awsome sale 30% off.</p>
                    <Link> Shop Now</Link>
                </div>
                <div className='d-flex p-0 align-items-center'>
                    <div className='border-end'>
                        <span>Currency:</span><button className='topbarbutton'>$USD<FiChevronDown /></button>
                    </div>
                    <div className='ps-2'>
                        <span>Language:</span><button className='topbarbutton '>English<FiChevronDown /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;