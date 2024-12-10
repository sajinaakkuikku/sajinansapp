import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Category from './Category';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    const [isAppVisible, setIsAppVisible] = useState(false);
    const [isCatVisible, setIsCatVisible] = useState(false);

    const handleMenuClick = (menuItem) => {
        if (menuItem === 'Country List') {
            setIsAppVisible(true); // Show App
            setIsCatVisible(false); 

        }
        else {
            setIsAppVisible(false); // Show App
            setIsCatVisible(true); 
        }
    };

    return (
        <React.StrictMode>
            <Header />
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: '20%', verticalAlign: 'top' }}>
                            {/* Pass handleMenuClick to Menu */}
                            <Menu onMenuClick={handleMenuClick} />
                        </td>
                        <td style={{ width: '80%', verticalAlign: 'top' }}>
                            {/* Render App based on isAppVisible */}
                            {isAppVisible && <App />}
                        </td>
                        <td style={{ width: '80%', verticalAlign: 'top' }}>
                            {/* Render App based on isAppVisible */}
                            {isCatVisible && <Category />}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </React.StrictMode>
    );
}

root.render(<Main />);

reportWebVitals();
