import React from 'react';
import {Container } from '@material-ui/core';
function WebsiteMenu({id, contact,summary,education,experience,achievement,skill,sectionOrder}) {
    const titles = [contact.split(' ')[0],summary.split(' ')[0],education.split(' ')[0],experience.split(' ')[0],achievement.split(' ')[0],skill.split(' ')[0]]
    return (
        <>
            <Container>
                <h2>Resume {id}</h2>
                <h3>{titles[0]}</h3>
                <p>{contact.slice(titles[0].length)}</p>
                <h3>{titles[1]}</h3>
                <p>{summary.slice(titles[1].length)}</p>
                <h3>{titles[2]}</h3>
                <p>{education.slice(titles[2].length)}</p>
                <h3>{titles[3]}</h3>
                <p>{experience.slice(titles[3].length)}</p>
                <h3>{titles[4]}</h3>
                <p>{achievement.slice(titles[4].length)}</p>
                <h3>{titles[5]}</h3>
                <p>{skill.slice(titles[5].length)}</p>
            </Container>
            <hr></hr>
        </>

    )
}
export default WebsiteMenu;