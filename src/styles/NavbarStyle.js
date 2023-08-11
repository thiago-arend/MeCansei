import styled from "styled-components";

export const BottomNavbarStyle = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    background-color: #FFF6DC;
    color: #5B9A8B;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    padding: 0 20px;

    div {
        width: 1px;
        height: 50px;
        background-color: gray;
    }
`;

export const SearchBar = styled.div`
    z-index: 1;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-color: #FFF6DC;
    color: #5B9A8B;
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    position: fixed;
    padding: 0 20px;
    top: 0;
`;