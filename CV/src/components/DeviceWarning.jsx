import { useState, useEffect } from 'react';
import '../styles/DeviceWarning.css';

export default function DeviceWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent) 
                || window.innerWidth <= 1024;
            setShowWarning(isMobile);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    if (!showWarning) return null;

    return (
        <div className="device-warning-overlay">
            <div className="device-warning-content">
                <h2>⚠️ Device Compatibility Warning</h2>
                <p>This application is designed for laptops and desktop computers only.</p>
                <p>For the best experience, please access Skillhsheet on a device with a larger screen.</p>
                <div className="device-icons">
                    <span className="device-icon">💻</span>
                    <span className="device-icon">🖥️</span>
                </div>
                <p className="supported-text">Supported Devices</p>
            </div>
        </div>
    );
} 