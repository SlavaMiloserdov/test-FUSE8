import React from 'react';
import './see-more-button.scss';

const defaultTitleForButton = 'See more ';

const SeeMoreButton = () => {
    return (
        <button className="see-more-button">
            { defaultTitleForButton }
            <svg className="see-more-button__arrow" width="7" height="17" viewBox="0 0 7 17" 
            fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Chevron" d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" 
                strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>
    );
};

export default SeeMoreButton;