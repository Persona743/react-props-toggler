import React from 'react';

export default function Info() {
    return (
        <>
            <img src="/assets/images/card-image.jpg" className="card--image" />
            <div className="info--container">
                <h2 className="card--name">Siavash Shahidi</h2>
                <h5 className="card--position">Fronend Developer</h5>
                <h6 className="card--site">codewithpersona.website</h6>
                <div className="btn--group">
                    <button type="button" className="btn--mail">
                        <img src="/assets/images/Icon.png" />
                        Email
                    </button>
                    <button type="button" className="btn--linkedin">
                        <img src="/assets/images/Linkdin.png" />
                        LinkedIn
                    </button>
                </div>
            </div>
        </>
    );
}
