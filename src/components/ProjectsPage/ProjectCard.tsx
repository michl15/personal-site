import { Badge } from "primereact/badge";
import { Card } from "primereact/card"
import { Panel } from "primereact/panel";
import { AnimationOnScroll } from "react-animation-on-scroll";

type ProjectCardProps = {
    item: {
        title: string;
        desc: string;
        tools: string[];
        subtitle: string;
    }
}

const ProjectCard = ({ item }: ProjectCardProps) => {

    const toolsUsed = () => {
        return (
            <Panel header="Technologies Used" className="raleway-mlee">
                <div className="flex flex-wrap justify-center">
                    {item.tools.map((tool, index) => (
                        <AnimationOnScroll animateIn="animate__zoomIn" delay={100 * index} animateOnce>
                            <Badge value={tool} className="m-1" size="large" />
                        </AnimationOnScroll>
                    ))}
                </div>
            </Panel>
        )
    }

    return (
        <AnimationOnScroll animateIn="animate__fadeInUp">
            <Card title={item.title} className="mb-5 raleway-mlee" subTitle={item.subtitle}>
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