import { Button } from "primereact/button";
import ghURL from "../../assets/github-mark-white.svg";
import linkedinURL from "../../assets/InBug-White.png";

type ExternalLinksProps = {
    size?: "small" | "large" | undefined;
}

const ExternalLinks = ({ size }: ExternalLinksProps) => {
    const linkedIn = "https://www.linkedin.com/in/michellelee98/";
    const gh = "https://github.com/michl15";

    const imgSizes = () => {
        switch (size) {
            case 'large':
                return "w-12 h-12";
            case 'small':
                return "w-3 h-3";
            default:
                return "w-6 h-6";
        }
    }

    return (
        <div>
            <Button text onClick={() => { window.open(gh, "_") }} size={size}>
                <img src={ghURL} className={imgSizes()} />
            </Button>
            <Button text onClick={() => { window.open(linkedIn, "_") }} size={size}>
                <img src={linkedinURL} className={imgSizes()} />
            </Button>
        </div>
    )
}

export default ExternalLinks;