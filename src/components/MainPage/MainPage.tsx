import { MenuItem } from 'primereact/menuitem';
import AboutPage from '../AboutPage';
import { Menubar } from 'primereact/menubar';
import WelcomePage from '../WelcomePage';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ScrollTop } from 'primereact/scrolltop';
import ExperiencePage from '../ExperiencePage';
import EducationPage from '../EducationPage';
import ProjectsPage from '../ProjectsPage';

const MainPage = () => {
    const menuItems: MenuItem[] = [
        {
            id: "landing",
            label: "Welcome",
            url: "#welcome"
        },
        {
            id: "about",
            label: "About Me",
            url: "#about-me"
        },
        {
            id: "experience",
            label: "Work Experience",
            url: "#work-experience"
        },
        {
            id: "edu",
            label: "Education",
            url: "#education"
        },
        {
            id: "personal",
            label: "Projects",
            url: "#projects"
        },
        {
            id: "contact",
            label: "Contact Me"
        }
    ];

    return (
        <div>
            <Menubar model={menuItems} className='fixed top-0 left-0 w-full z-10 raleway-mlee' />
            <ScrollTop />
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll initiallyVisible>
                <WelcomePage />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll>
                <AboutPage />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll>
                <ExperiencePage />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll>
                <EducationPage />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll>
                <ProjectsPage />
            </AnimationOnScroll>
        </div>
    )
}

export default MainPage;