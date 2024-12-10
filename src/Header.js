import React from 'react';
import './css/css/bootstrap.min.css';
import './css/css/style.css';
import './css/css/main.css';
function Header() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="d-flex">
                    <div className="brand-logo">
                        {/* Add your logo or leave it empty */}
                    </div>
                    <div className="p-4 d-flex">
                        <div>
                            <h3 className="head--text">
                                VESSELS
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="search large ml-auto">
                    <div className="d-flex justify-content-end">
                        <span className="icon-search"></span>
                    </div>
                    <input
                        type="text"
                        className="text-box large with-close"
                        placeholder="Search by Vessel Name, Vessel Code & IMO No."
                        id="txtsearch"
                        onKeyUp={(event) =>
                            console.log(
                                `Search query: ${event.target.value}`
                            )
                        }
                    />
                </div>

                <button className="primary-btn-orange ms-4" id="btnaddnewvessel">
                    <a
                        href="/VesselDetails/Create?source=vesselDetails"
                        style={{ textDecoration: 'none' }}
                    >
                        Add New Vessel
                    </a>
                </button>
            </div>
        </footer>
    );
}

export default Header;
