import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'postcards-from-space',
            description: 'APIs/Handlebars/Sequelize/mySQL/passport.js/Jquery',
            link: "https://shrouded-hollows-71129.herokuapp.com/",
            repo: "https://github.com/Preeya15/Postcards-from-Mars"
            
        },
        {
            name: 'eat-da-burger',
            description: 'mySQL/handlebars/express/JS',
            link: "https://cryptic-plateau-60150.herokuapp.com/",
            repo: "https://github.com/Preeya15/burger"
        },
        {
            name: 'note-taker',
            description: 'Node/express/JS/APIs/mySQL',
            link: "https://agile-beyond-82762.herokuapp.com/",
            repo: "https://github.com/Preeya15/Note-Taker"
        },
        {
            name: 'employee-directory',
            description: 'HTML/CSS',
            link: "https://preeya15.github.io/Employee-directory/",
            repo: "https://github.com/Preeya15/Employee-directory"
            
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://preeya15.github.io/Code-Quiz/",
            repo: "https://github.com/Preeya15/Code-Quiz"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://preeya15.github.io/Weather_Dashboard/",
            repo: "https://github.com/Preeya15/Weather_Dashboard"
        },
        {
            name: 'budget-tracker',
            description: 'Node/APIs/PWA/CSS/JS',
            link: "https://protected-hollows-64426.herokuapp.com/",
            repo: "https://github.com/Preeya15/budget-tracker"
        },
        {
            name: 'team-profile-generator',
            description: 'JavaScript',
            repo: " https://github.com/Preeya15/Team-Profile-Generator"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://preeya15.github.io/Password-generator/",
            repo: "https://github.com/Preeya15/Password-generator"
        },
        {
            name: 'workday-planner',
            description: 'HTML/JS/CSS',
            link: "hhttps://preeya15.github.io/Day-Planner/",
            repo: "https://github.com/Preeya15/Day-Planner"
        },
        {
            name: 'employee-tracker',
            description: 'JavaScript',
            link:"https://github.com/Preeya15/Employee-Tracker",
            repo: "https://github.com/Preeya15/Employee-Tracker"

        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;