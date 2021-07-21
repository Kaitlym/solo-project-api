import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

function Template1(){
    const getContactstUrl = "http://localhost:8000/v1/contacts"
    const getExperiencestUrl = "http://localhost:8000/v1/experiences"
    const getSkillstUrl = "http://localhost:8000/v1/skills"
    const [contacts, setContacts] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const router = useRouter()

    useEffect(async () => {
        const responseContact = await fetch(getContactstUrl, {method: "GET" });
        const jsonContact = await responseContact.json();
        setContacts(jsonContact);
        const responseExperience = await fetch(getExperiencestUrl, {method: "GET" });
        const jsonExperience = await responseExperience.json();
        setExperiences(jsonExperience);
        const responseSkills = await fetch(getSkillstUrl, {method: "GET" });
        const jsonSkills = await responseSkills.json();
        setSkills(jsonSkills);
    }, [])

    return (
    <div>
        <h2>Contacts</h2>
        <div>
            {contacts.map ( (contact) => 
            <div>
                <p>
                    id: {contact.id}
                </p>
                <p>
                    name: {contact.name}
                </p>
                <p>
                    email: {contact.email}
                </p>
                <p>
                    phone-number: {contact.phone}
                </p>
                <hr></hr>
            </div>
            )}
        </div>
        <h2>Experience</h2>
        <div>
            {experiences.map ( (experiences) =>
            <div>
                <p>
                    id: {experiences.id}
                </p>
                <p>
                    name: {experiences.name}
                </p>
                <hr></hr>
            </div>
            )}
        </div>      

        <h2>Skills</h2>
        <div>
            {skills.map ( (skill) =>
            <div>
                <p>
                    id: {skill.id}
                </p>
                <p>
                    name: {skill.name}
                </p>
                <hr></hr>
            </div>
            )}
        </div>
    </div>

    )
}

export default Template1;