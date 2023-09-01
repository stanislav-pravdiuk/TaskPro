    import styled from 'styled-components';

    export const BtnBox = styled.ul`
    border-radius: 8px;
    background: #FCFCFC;
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
    padding: 18px;
    list-style-type: none;
    min-width: 99px;
    height: 100%;
    `;

        export const BtnTitle = styled.p`
    color: #161616;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 8px;
    `;

    export const Icon = styled.svg`
    stroke: #161616;
    width: 16px;
    height: 16px;
    `;

export const BtnRight = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover,
    &:focus{
        ${Icon} {
            stroke: #BEDBB0;
        };
        ${BtnTitle} {
            color: #BEDBB0;
        }
    }
    
    &:not(:last-child) {
    margin-bottom: 8px;
    }
    `;

