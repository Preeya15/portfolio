import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav (props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a href="#About">Priya Sharma</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {pages.map((Page) => (
                            <li
                                className={`nav-item nav-link js-scroll-trigger ${
                                    currentPage.name === Page.name && 'active'
                                    }`}
                                key={Page.name}
                            >
                                <span
                                    onClick={() => setCurrentPage(Page)}
                                >
                                    {capitalizeFirstLetter(Page.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;
