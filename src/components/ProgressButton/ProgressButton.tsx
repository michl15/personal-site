import { Button } from "primereact/button";

type ProgressButtonProps = {
    label: string,
    scrollToLoc: string
}
const ProgressButton = ({ label, scrollToLoc }: ProgressButtonProps) => {
    const onProgressClick = () => {
        document.getElementById(scrollToLoc)?.scrollIntoView();
    }

    return (
        <div className="relative bottom-0 left-0 w-full p-10">
            <p className="flex justify-center mb-2">{label}</p>
            <div className="flex justify-center">
                <Button rounded outlined onClick={onProgressClick} >↓</Button>
            </div>
        </div >
    )
}

export default ProgressButton;