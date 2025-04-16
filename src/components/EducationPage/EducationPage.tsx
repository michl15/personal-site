import { Badge } from "primereact/badge";
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import ProgressButton from "../ProgressButton";

const EducationPage = () => {
    const uciList = [
        `Coursework in Python, C++, and Java, including work on data structures, informatics, and critical writing in information technology.`,
        `Volunteered as a mentor in the Women in Information and Computer Science Club (WICS), providing mentorship and guidance to underclassmen.`
    ];

    const fullStackList = [
        `Developing with front-end development languages and tools such as HTML, CSS, JavaScript, React and Bootstrap`,
        `Programing applications using back-end languages and frameworks like Express, Node.js, Python, Django, etc.`,
        `Deploying and scaling applications using Cloud Native methodologies and tools like Containers, Kubernetes, Microservices and Serverless Functions`
    ]

    const renderBullets = (strList: string[]) => {
        return strList.map((str) => (
            <li>
                <p>{str}</p>
            </li>
        ))
    }


    return (
        <div id="education" className="min-h-screen grid content-center raleway-mlee ">
            <div className="m-10 flex justify-center mt-20">
                <Fieldset className="max-w-4xl p-6 raleway-mlee" legend="Education">
                    <Panel className="max-w-4xl p-6 raleway-mlee" header={<><span className="mr-2">2025</span><Badge value="In Progress" severity={"warning"} /></>}>
                        <div className="flex divide-x-1 divide-solid">
                            <div className="w-1/3 px-1 min-w-45">
                                <h1 className="text-3xl">IBM Full Stack Software Developer Certification</h1>
                                <br />
                                <h2 className="text-xl justify-start">Coursera</h2>
                            </div>
                            <div className="w-2/3 pl-5">
                                <ul className="pl-4 list-disc">
                                    {renderBullets(fullStackList)}
                                </ul>
                                <br />
                                <p className="flex justify-end">
                                    <a href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer" target="_" className="text-sky-300 mr-3">More details →</a>
                                </p>
                            </div>
                        </div>
                    </Panel>
                    <Panel className="max-w-4xl p-6 raleway-mlee" header={"2020-2024"}>
                        <div className="flex divide-x-1 divide-solid">
                            <div className="w-1/3 px-1 min-w-45">
                                <h1 className="text-3xl">B.S. in Computer Science</h1>
                                <br />
                                <h2 className="text-xl justify-start">University of California, Irvine</h2>
                            </div>
                            <div className="w-2/3 pl-5">
                                <ul className="pl-4 list-disc">
                                    {renderBullets(uciList)}
                                </ul>
                            </div>
                        </div>
                    </Panel>
                </Fieldset>
            </div>
            <ProgressButton label="Projects" scrollToLoc="projects" />
        </div>
    )
}

export default EducationPage;