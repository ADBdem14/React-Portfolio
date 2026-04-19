export default function Skills() {
        const skills = ["HTML", "CSS", "React"];
    return(
        <section>
            <h2>My Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                <div key={index}>{skill}</div>
             ))}
            </ul>
        </section>
    );
}

