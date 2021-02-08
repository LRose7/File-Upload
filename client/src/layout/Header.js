import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="header">
                <Link className="brand" to="/">
                    <img className="logo-img" src="upload.png" alt="logo" />
                    File Uploader
                </Link>
        </header>
    )
}