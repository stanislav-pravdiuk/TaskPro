import { useParams } from "react-router-dom";
import icon from '../../components/iconSvg/icon.svg';
import { BtnCreate, BtnLogOut } from "components/buttons/buttons";

const ScreensPage = () => {
    const { boardName } = useParams();
    return (
        <div>
            <svg height={18} width={18}>
                <use href={icon + '#icon-icon-1'}></use>
            </svg>
            <h2>название {boardName}</h2>
            <BtnCreate />
            <BtnLogOut />
        </div>
    );
};

export default ScreensPage;