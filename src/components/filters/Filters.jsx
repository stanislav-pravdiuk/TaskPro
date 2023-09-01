import { BtnCloseBlack } from "components/buttons/buttons";
import { BtnBox, BtnReset, ColorOptionLabel, ResetBox, ResetTitle, Title, TitleBox, Container } from "./Filters.styled";

function Filters() {
    return (
        <Container>
            <TitleBox>
                <Title>Filters</Title>
                <BtnCloseBlack />
            </TitleBox>
            <ResetBox>
                <ResetTitle>Lable color</ResetTitle>
                <BtnReset>Show all</BtnReset>
            </ResetBox>
            <BtnBox>
                <ColorOptionLabel className="blue">
                    <button type="radio" name="priority" value="low" />
                </ColorOptionLabel>
                <ColorOptionLabel className="red">
                    <button type="radio" name="priority" value="medium" />
                </ColorOptionLabel>
                <ColorOptionLabel className="green">
                    <button type="radio" name="priority" value="high" />
                </ColorOptionLabel>
                <ColorOptionLabel className="gray">
                    <button type="radio" name="priority" value="without" />
                </ColorOptionLabel>
            </BtnBox>
        </Container>
    );
};

export default Filters;