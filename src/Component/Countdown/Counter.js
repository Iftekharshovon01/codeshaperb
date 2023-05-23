import React, { useEffect, useState } from 'react';

const Counter = () => {
    const targetDate = new Date('2023-12-31T23:59:59');

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [calculateTimeLeft, timeLeft]);

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }
    return (
        <div className="counter-time">
            <p className='counter-time-single'><span className='number'>{timeLeft.days}</span><span className='text'>Days</span></p>
            <p className='counter-time-single'><span className='number'>{timeLeft.hours}</span><span className='text'>Hours</span></p>
            <p className='counter-time-single'><span className='number'>{timeLeft.minutes}</span><span className='text'>Mins</span></p>
            <p className='counter-time-single'><span className='number'>{timeLeft.seconds}</span><span className='text'>Secs</span></p>
        </div>
    );
};

export default Counter;