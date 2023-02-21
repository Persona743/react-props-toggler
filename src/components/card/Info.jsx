import React from 'react';
import mailImage from '../../assets/images/Icon.png';
import linkedInImage from '../../assets/images/Linkdin.png';
import cardImage from '../../assets/images/card-image.jpg';

export default function Info() {
    return (
        <>
            <img src={cardImage} className="card--image" />
            <div className="info--container">
                <h2 className="card--name">Siavash Shahidi</h2>
                <h5 className="card--position">Fronend Developer</h5>
                <h6 className="card--site">codewithpersona.website</h6>
                <div className="btn--group">
                    <button type="button" className="btn--mail">
                        <img src={mailImage} />
                        Email
                    </button>
                    <button type="button" className="btn--linkedin">
                        <img src={linkedInImage} />
                        LinkedIn
                    </button>
                </div>
            </div>
        </>
    );
}
