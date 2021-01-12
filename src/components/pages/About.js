import React from 'react'

const About = () => {
    return (
        <div className="about-page">
            <div className="app">
                <h2>About the application</h2>
                <h3>version 1 <span id="current">(Current)</span></h3>
                <ul>
                    <li>Front end React application with vision for later versions.</li>
                    <li>Using keyword to search for results (keyword can be a location or a name).</li>
                    <li>Result data is fetched from a third party API - BreweryDB.</li>
                </ul>

                <h3>version 2</h3>
                <ul>
                    <li>Using C++ to add a back end.</li>
                    <li>Back end can perform all basic CRUD (Create, Read, Update, Delete)</li>
                    <li>Possible user authentication.</li>
                </ul>

                <h3>version 3</h3>
                <ul>
                    <li>User can save a favourite bewwery.</li>
                    <li>User can add a note to a brewery.</li>
                </ul>
            </div>

            <div className="dev">
                <h2>About Me <span>:D</span></h2>
                <p>I am a junior-level software developer, who wants to spread his wings and soars into the big blue sky. In order to do that, I need serious preparation. I am looking for a fostering environment, where I can explore in a controlled-chaotic manner.
                </p>
                <div className="info">
                    <u>Please feel free to checkout my work:</u>
                    <p>LinkedIn: <a
                        href='https://www.linkedin.com/in/tnguyens'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='LinkedIn'
                    >tnguyens</a></p>
                    <p>GitHub: <a
                        href='https://github.com/TN-space'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='GitHub'
                    >TN-space</a></p>
                    <p>Portfolio: <a
                        href='https://tn-space.github.io'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Portfolio'
                    >tn-space</a></p>
                </div>

                <h1 className="help"><i>Any helps is greatly appreciated!!</i></h1>
            </div>

        </div>
    )
}

export default About
