import React from 'react';

const MainFooter = () => {
    return (
        <>
            <footer id="footers">
                <div className="container">
                    <a
                        href="https://github.com/nks-009/Shopping-Website-using-React.js"
                        className="repo_links"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/nks-009/Shopping-Website-using-React.js
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://gulshansongara.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Nikhil Kumar Singh
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default MainFooter;