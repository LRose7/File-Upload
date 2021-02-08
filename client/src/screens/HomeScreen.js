import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return(
        <div className="container homescreen-links">
            <div>
                <Link to="/SingleFileUpload" className="btn btn-outline-primary">Single File</Link>
            </div>
            <div>
                <Link to="/MultipleFileUpload" className="btn btn-outline-primary">Multiple Files</Link>
            </div>
            
        </div>
    )
}