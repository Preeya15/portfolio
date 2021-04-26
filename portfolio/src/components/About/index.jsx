import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-light d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p>Customer experience (CX) and Digital strategy are the underlying passions that drive my vision from product ideation, development, to delivery and implementation.</p>
                       
                        <p>I am currently working as a Product Owner/Technology Lead, I have a good understanding of Technology, Operations, IT SDLC, User experience and Customer experience. In my current job, I am accountable to develop a Product/Project from Ideation, impact analysis, defining business rules, stakeholder management, prioritizing backlog, sprint planning, solution designing, organizing workshops, act as interlock between Technical and Operations teams, implementation, and delivery.</p>

                        <p>When I am not on the job, I am out doing gardening. I believe in sustainable living and leaving less carbon footprints. I also have interest in Leadership/Management, so I am constantly either reading or listening to podcasts about it.
                        </p>

                        <p>I am a firm believer in setting short-term and long term goals. Being able to consistently achieve and work towards the goal is highly motivating and drives me to deliver and constantly move forward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About