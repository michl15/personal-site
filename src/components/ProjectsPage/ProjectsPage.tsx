import { Timeline } from "primereact/timeline";
import ProjectCard from "./ProjectCard";
import { Badge } from "primereact/badge";
import ProgressButton from "../ProgressButton";

const ProjectsPage = () => {
    const projects = [
        {
            title: "Personal Site",
            opp: "You are here",
            oppSeverity: "",
            desc: "My own personal site to showcase my skills, experience, education, and projects.",
            tools: [
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "PrimeReact"
            ],
            marker: <Badge size="normal" value={"✓"} />,
            subtitle: "Apr 2025",
            ghLink: "https://github.com/michl15/personal-site",
            link: ""
        },
        {
            title: "Adventurer's Lodge 🔗",
            opp: "Work In Progress",
            oppSeverity: "warning",
            desc: "Web application for creating and managing DnD characters, campaigns, and more.",
            tools: [
                "React",
                "Create React App",
                "React Bootstrap",
                "Typescript",
                "React Redux",
                "React Router",
                "GraphQL",
                "RESTful APIs",
                "Firebase"
            ],
            subtitle: "Jan 2025 - present",
            marker: <Badge severity={"warning"} size="normal" value={"!"} />,
            ghLink: "https://github.com/michl15/adventurers-lodge",
            link: "https://adventurers-lodge.web.app/#/"
        },
        {
            title: "Fetch 🔗",
            opp: "Complete",
            oppSeverity: "success",
            desc: "Web application developed for a coding assessment.",
            tools: [
                "React",
                "Javascript",
                "Github Pages",
                "React Bootstrap",
                "RESTful APIs",
                "React Router"
            ],
            subtitle: "Jan 2025",
            marker: <Badge severity={"success"} size="normal" value={"✓"} />,
            ghLink: "https://github.com/michl15/fetch-dog-search",
            link: "https://michl15.github.io/fetch-dog-search/"
        }
    ]

    return (
        <div id="projects" className="min-h-screen grid content-center">
            <h1 className="flex text-5xl justify-center mb-10 mt-20">Personal Projects</h1>
            <Timeline
                value={projects}
                content={(item) => (<ProjectCard item={item} />)}
                opposite={(item) => (item.opp && <Badge value={item.opp} severity={item.oppSeverity} />)}
                align="alternate"
                marker={(item) => item.marker}
                className="flex justify-center" />
            <ProgressButton label="Contact" scrollToLoc="contact-form" />
        </div>
    )
}

export default ProjectsPage;