import { SITE_AVATAR, SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import "../styles/card-info.scss";

const InfoCard = () => {
    return (
        <div className="card card-info">
            <img
                className="avatar"
                src={SITE_AVATAR}
                alt="Avatar"
                width={120}
                height={120}
            />
            <h1>{SITE_TITLE}</h1>
            <p>{SITE_DESCRIPTION}</p>
        </div>
    );
};

export default InfoCard;
