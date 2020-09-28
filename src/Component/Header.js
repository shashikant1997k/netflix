import React, { useEffect, useState } from 'react'
import '../CSS/Header.css';

function Header() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <nav className={`header ${show && `header__black`}`}>
            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix logo"
            />

            <img
                className="header__avatar"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/626f7f20-56da-4a6c-9996-50364c8b9ae2/d8i56la-041ce154-9794-4eac-99cc-3716cdb75bca.png"
                alt="Netflix logo"
            />
        </nav >
    )
}

export default Header
