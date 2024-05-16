import { SITE_AVATAR, SITE_DESCRIPTION, SITE_TITLE } from "../config";
import "../styles/card.css";

const NavigationBar = () => {
    return (
        <nav
            className="card sticky"
            un-self="start"
            un-top="0"
            un-text="center"
            un-w="sm"
            un-h="md"
        >
            <img
                src={SITE_AVATAR}
                alt="Avatar"
                un-size="30"
                un-mx="auto"
                un-drop-shadow="md"
                un-rounded="full"
                un-object="contain"
            />
            <h1>{SITE_TITLE}</h1>
            <p>{SITE_DESCRIPTION}</p>
        </nav>
    );
};

export default NavigationBar;
