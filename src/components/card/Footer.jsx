import React from 'react';
import githubIcon from '../../assets/images/GitHub Icon.png';
import facebookIcon from '../../assets/images/Facebook Icon.png';
import twitterIcon from '../../assets/images/Twitter Icon.png';
import instagramIcon from '../../assets/images/Instagram Icon.png';

export default function Footer() {
    return (
        <div className="footer--wrap">
            <img src={twitterIcon} className="social--icon" />
            <img src={facebookIcon} className="social--icon" />
            <img src={instagramIcon} className="social--icon" />
            <img src={githubIcon} className="social--icon" />
        </div>
    );
}
