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
            subtitle: "Apr 2025"
        },
        {
            title: "Adventurer's Lodge",
            opp: "Work In Progress",
            oppSeverity: "warning",
            desc: "Web application for creating and managing DnD characters, campaigns, and more.",
            tools: [
                "React",
                "Create React App",
                "React Bootstrap",
                "Typescript",
                "React Redux",
                "Firebase"
            ],
            subtitle: "Jan 2025 - present",
            marker: <Badge severity={"warning"} size="normal" value={"!"} />
        },
        {
            title: "Fetch",
            opp: "Complete",
            oppSeverity: "success",
            desc: "",
            tools: [],
            subtitle: "Jan 2025",
            marker: <Badge severity={"success"} size="normal" value={"✓"} />,

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
            <ProgressButton label="Contact" scrollToLoc="contact" />
        </div>
    )
}

export default ProjectsPage;