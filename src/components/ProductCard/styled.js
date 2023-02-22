// import { width } from "@mui/system";
import styled from "styled-components";

export const StyledProductCard = {
    Wrapper: styled.li`
        width: 220px;
        height: fit-content;
        background: #eae9e8;
        font-family: sans-serif;
        line-height: 18px;
        color: #000;
    `,
    Title: styled.h2``,
    Image: styled.img`
        width: 100%;
    `,
    Memory: styled.div`
        font-size: 1rem;
        font-family: Arial;
    `,
    Description: styled.p`
        font-weight: 300;
        line-height: 1.5rem;
    `,
    Price: styled.span`
        font-size: 1.4rem;
    `,
    CountInStock: styled.div`
        font-size: 1rem;
        margin-top: 10px;
    `,
    InfoWrapper: styled.div`
        padding: 10px;
    `,

    ButtonWrapper: styled.div`
        display: flex;
        gap: 2px;
        flex-wrap: wrap;
    `,
};
