import React from 'react'
import Card from '../components/shared/card'
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>THis is a React app to leave a feedback for a product or service</p>
                <p>version: 1.0.0</p>

                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage