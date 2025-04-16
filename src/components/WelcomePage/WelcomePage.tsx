import { TypeAnimation } from "react-type-animation";
import ProgressButton from "../ProgressButton";
import reactURL from '../../assets/react-svgrepo-com.svg';
import tsURL from '../../assets/typescript-official-logo.svg';
import htmlURL from '../../assets/html-5-svgrepo-com.svg';
import cssURL from '../../assets/css-3-logo.svg';
import jsURL from '../../assets/js-logo.svg';
import viteURL from '../../assets/vite-svgrepo-com.svg';
import jestURL from '../../assets/jest-snapshot-svgrepo-com.svg';
import { useState } from "react";
import 'animate.css';

const WelcomePage = () => {
    const [imageURL, setImageURL] = useState(reactURL);

    const typeSequence = [
        "React.",
        1500,
        () => setImageURL(tsURL),
        "TypeScript.",
        1500,
        () => setImageURL(htmlURL),
        "HTML.",
        1500,
        () => setImageURL(cssURL),
        "CSS.",
        1500,
        () => setImageURL(jsURL),
        "JavaScript.",
        1500,
        () => setImageURL(viteURL),
        "Vite.",
        1500,
        () => setImageURL(jestURL),
        "Jest.",
        1500,
        () => setImageURL(reactURL)
    ]
    return (
        <div id="welcome" className="min-h-screen grid content-center animate__fadeIn">
            <div>
                <p className="text-5xl flex justify-center mb-3">Welcome</p>
                <p className="text-2xl flex justify-center">
                    <span className="p-1">
                        I'm Michelle, a front-end developer building dynamic UI/UX with
                        <TypeAnimation sequence={typeSequence} repeat={Infinity} className="pl-1 text-teal-400" />
                    </span>
                </p>
                <p className="text-xl flex justify-center">
                    <img src={imageURL} className="animate__animated animate__fadeIn animate__zoomIn w-32 m-10" key={imageURL} />
                </p>
            </div>
            <ProgressButton label="About Me" scrollToLoc="about-me" />
        </div>
    )
}

export default WelcomePage;