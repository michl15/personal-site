import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Card } from "primereact/card"
import { Panel } from "primereact/panel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import githubURL from '../../assets/github-mark-white.svg';

type ProjectCardProps = {
    item: {
        title: string;
        desc: string;
        tools: string[];
        subtitle: string;
        ghLink: string;
        link: string;
    }
}

const ProjectCard = ({ item }: ProjectCardProps) => {

    const toolsUsed = () => {
        return (
            <Panel header="Technologies Used" className="raleway-mlee">
                <div className="flex flex-wrap justify-center">
                    {item.tools.map((tool, index) => (
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={50 * index}>
                            <Badge value={tool} className="m-1" size="large" />
                        </AnimationOnScroll>
                    ))}
                </div>
            </Panel>
        )
    }

    const cardFooter = () => {
        return (
            <div className="flex flex-wrap justify-center">
                <Button rounded text onClick={() => { window.open(item.ghLink, "_") }}>
                    <img src={githubURL} className="w-6" />
                    <span className="ml-2">Check out the source code</span>
                </Button>
            </div>
        )
    }

    const cardTitle = () => {
        return (
            <a href={item.link} target="_">{item.title}</a>
        )
    }

    return (
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <Card title={cardTitle()} className="mb-5 raleway-mlee" subTitle={item.subtitle} footer={cardFooter()}>
                <div>
                    {item.desc}
                </div>
                <br />
                <div>
                    {toolsUsed()}
                </div>
            </Card>
        </AnimationOnScroll>
    )
}

export default ProjectCard;