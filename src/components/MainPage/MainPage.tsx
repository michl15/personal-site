import { MenuItem } from 'primereact/menuitem';
import AboutPage from '../AboutPage';
import { Menubar } from 'primereact/menubar';
import WelcomePage from '../WelcomePage';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ScrollTop } from 'primereact/scrolltop';
import ExperiencePage from '../ExperiencePage';
import EducationPage from '../EducationPage';
import ProjectsPage from '../ProjectsPage';
import ExternalLinks from '../ExternalLinks';
import ContactPage from '../ContactPage';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY } from '../../constants/constants';
import { useEffect } from 'react';


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
            label: "Contact Me",
            url: "#contact-form"
        }
    ];

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            // The variable contains the email address
            watchVariable: 'userEmail',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Menubar model={menuItems} className='fixed top-0 left-0 w-full z-10 raleway-mlee' end={<ExternalLinks />} />
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
            <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll>
                <ContactPage />
            </AnimationOnScroll>
        </div>
    )
}

export default MainPage;