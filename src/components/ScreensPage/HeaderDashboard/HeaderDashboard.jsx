import icon from '../../iconSvg/icon.svg';
import { BtnCreate, BtnLogOut } from "components/buttons/buttons";

const HeaderDashboard = ({ boardName }) => {
    return (
        <div>
            <svg height={18} width={18}>
                <use href={icon + '#icon-icon-1'}></use>
            </svg>
            <h2>{boardName}</h2>
            <BtnCreate />
            <BtnLogOut />
        </div>
    );
};

export default HeaderDashboard;