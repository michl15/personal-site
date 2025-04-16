import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Toast } from "primereact/toast";
import { EMAILJS_EMAIL_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from "../../constants/constants";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [emailContent, setEmailContent] = useState("");

    const form = useRef<HTMLFormElement>(null);

    const sentEmailToast = useRef<Toast>(null);

    const resetAllFields = () => {
        setName("");
        setEmail("");
        setSubject("");
        setEmailContent("");
    }

    const showToast = (success: boolean) => {
        if (sentEmailToast.current !== null) {
            if (success) {
                sentEmailToast.current.show({
                    severity: "success",
                    summary: "Email Sent",
                    detail: "Thanks for getting in touch! I'll get back to you as soon as possible"
                })
            } else {
                sentEmailToast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Looks like something went wrong. Please try again."
                })
            }
        }
    }

    const onContactSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.current?.checkValidity()) {
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_EMAIL_TEMPLATE_ID, form.current as HTMLFormElement, {
                publicKey: EMAILJS_PUBLIC_KEY
            }).then((response) => {
                if (response.status === 200) {
                    showToast(true);
                    resetAllFields();
                } else {
                    showToast(false);
                }
            }).catch((error) => {
                showToast(false);
                console.error(error);
            })
        }
    }

    return (
        <div id="contact-form" className="min-h-screen grid content-center">
            <h1 className="text-4xl flex justify-center my-20">Get in touch</h1>
            <form ref={form} onSubmit={onContactSubmit}>
                <div className="flex justify-center mb-10">
                    <FloatLabel >
                        <InputText id="name" value={name} name="name" onChange={(event) => setName(event.target.value)} className="lg:w-200 md:w-100" required />
                        <label htmlFor="name">Name</label>
                    </FloatLabel>
                </div>

                <div className="flex justify-center mb-10">
                    <FloatLabel>
                        <InputText id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="lg:w-200 md:w-100" required />
                        <label htmlFor="email">Email</label>
                    </FloatLabel>
                </div>

                <div className="flex justify-center mb-10">
                    <FloatLabel>
                        <InputText id="title" name="title" value={subject} onChange={(event) => setSubject(event.target.value)} className="lg:w-200 md:w-100" required />
                        <label htmlFor="title">Subject</label>
                    </FloatLabel>
                </div>

                <div className="flex justify-center mb-10">
                    <FloatLabel>
                        <InputTextarea id="message" name="message" value={emailContent} onChange={(event) => setEmailContent(event.target.value)} className="lg:w-200 md:w-100 min-h-70" required />
                        <label htmlFor="message">Message</label>
                    </FloatLabel>
                </div>

                <div className="flex justify-center mb-10">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            <Toast ref={sentEmailToast} position="bottom-right" />
        </div>
    )
}

export default ContactPage;