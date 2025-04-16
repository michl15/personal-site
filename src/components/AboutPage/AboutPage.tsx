import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import ProgressButton from "../ProgressButton";
import { Badge } from "primereact/badge";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutPage = () => {
    const blurb = `My name is Michelle Lee, and I'm a front-end developer
    working primarily with React and Typescript to create vibrant and
    dynamic user experiences. I'm looking for a new opportunity to learn
    and grow in a challenging and exciting environment.`

    const skills = [
        "React",
        "Typescript",
        "Javascript",
        "HTML",
        "CSS",
        "Jest",
        "Playwright",
        "Agile",
        "Git",
        "JIRA"
    ]

    const formatSkills = () => {
        return skills.map((skill, index) => (
            <AnimationOnScroll animateIn="animate__zoomIn" delay={100 * index} animateOnce>
                <Badge value={skill} className="m-1" size="large" />
            </AnimationOnScroll>
        ))
    }

    return (
        <div id="about-me" className="min-h-screen grid content-center">
            <div className="m-10 flex justify-center">
                <Fieldset className="max-w-4xl p-6 raleway-mlee" legend="About Me">
                    <h1 className="flex text-4xl justify-center p-4 font-mono">Hello, World!</h1>
                    <p className="flex justify-center pt-0 pb-8 p-5">
                        {blurb}
                    </p>
                    <Panel header="Skills" className="raleway-mlee">
                        <p className="flex flex-wrap justify-center">
                            {formatSkills()}
                        </p>
                    </Panel>
                </Fieldset>
            </div>
            <ProgressButton label="Experience" scrollToLoc="work-experience" />
        </div>
    )
}

export default AboutPage;