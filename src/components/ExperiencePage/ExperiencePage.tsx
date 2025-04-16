import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import ProgressButton from "../ProgressButton";

const ExperiencePage = () => {
    const intuitList = [
        `Collaborated with design, product management, and analytics teams to enhance customer satisfaction and facilitate access to
experts for assistance during the filing process by implementing UI updates as well as streamlined experiences which allowed
customers to connect with experts in fewer clicks.`,
        `Successfully implemented Race Mode for TurboTax, enhancing customer engagement by enabling progress tracking and goal
setting for tax return completion, ultimately resulting in reduced time-to-complete and improved overall rates of completion for
customers.`,
        `Streamlined the tax summary page and finish-and-file experience by removing excess pages and consolidating summary data
into fewer screens, significantly reducing customer time spent and increasing completion rates.`,
        `Provided mentorship to interns and junior team members, fostering a collaborative environment and holding regular
one-on-one meetings in order to ensure their continued improvement and success.`
    ]

    const internList = [
        `Completed boot camp in React and Javascript in order to form a strong foundation for technical skill sets needed for contributing to various projects.`,
        `Contributed to various customer-facing features including Persistent Access Widget, which is a feature intended to allow customers to continuously access tax expert assistance throughout the filing experience.`,
        `Worked with the tech evangelist team to develop a proof of concept for an internal site called Tech @ Intuit, in order to highlight technical achievements within the programming and development spaces at Intuit and provide details on new areas of focus for the company.`
    ]

    const renderList = (strList: string[]) => {
        return strList.map((listItem) => (
            <li>
                <p>
                    {listItem}
                </p>
            </li>
        ))
    }

    return (
        <div id="work-experience" className="min-h-screen grid content-center raleway-mlee">
            <div className="m-10 flex justify-center mt-20">
                <Fieldset className="max-w-4xl p-6 raleway-mlee" legend="Experience">
                    <Panel className="max-w-4xl p-6 raleway-mlee" header={"2020-2024"}>
                        <div className="flex divide-x-1 divide-solid">
                            <div className="w-1/3 px-1 min-w-45">
                                <h1 className="text-3xl">Software Engineer</h1>
                                <br />
                                <h2 className="text-xl justify-start">Intuit</h2>
                                <h2 className="text-xl justify-start">San Diego, CA</h2>
                            </div>
                            <div className="w-2/3 pl-5">
                                <p>
                                    Developed and maintained customer-facing features within <a className="text-sky-300" href="https://turbotax.intuit.com/personal-taxes/online/live/how-it-works.htm" target="_">TurboTax Live</a> using React.js, JavaScript, CSS, and Typescript.
                                </p>
                                <br />
                                <ul className="pl-10 list-disc">
                                    {renderList(intuitList)}
                                </ul>
                            </div>
                        </div>
                    </Panel>
                    <Panel className="max-w-4xl p-6 raleway-mlee" header={"2019"}>
                        <div className="flex divide-x-1 divide-solid">
                            <div className="w-1/3 px-1 min-w-45">
                                <h1 className="text-3xl">Software Engineering Intern</h1>
                                <br />
                                <h2 className="text-xl justify-start">Intuit</h2>
                                <h2 className="text-xl justify-start">San Diego, CA</h2>
                            </div>
                            <div className="w-2/3 pl-5">
                                <p>
                                    Trained with scrum team to develop skills in front-end programming and Agile development.
                                </p>
                                <br />
                                <ul className="pl-10 list-disc">
                                    {renderList(internList)}
                                </ul>
                            </div>
                        </div>
                    </Panel>
                </Fieldset>
            </div>
            <ProgressButton label="Education" scrollToLoc="education" />
        </div>
    )
}

export default ExperiencePage;