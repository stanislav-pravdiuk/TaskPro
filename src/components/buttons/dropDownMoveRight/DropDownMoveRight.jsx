import { BtnBox, BtnRight, BtnTitle, Icon } from "./DropDownMoveRight.styled";
import icon from '../iconSvg/icon.svg'

function DropDownMoveRight() {
    return (
        <BtnBox>
            <li>
                <BtnRight>
                    <BtnTitle>Example1</BtnTitle>
                    <Icon><use href={icon + '#icon-arrow-circle-broken-right'}></use></Icon>
                </BtnRight>
            </li>
        </BtnBox>
    );
};

export default DropDownMoveRight;