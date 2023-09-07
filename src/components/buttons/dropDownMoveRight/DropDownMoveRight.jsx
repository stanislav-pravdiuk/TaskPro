import icon from '../iconSvg/icon.svg'
import { BtnBox, BtnRight, BtnTitle, Icon } from "./DropDownMoveRight.styled";

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