import styled from 'styled-components';

export const Title = styled.h1`
color:red;
font-size: 3.2em;
line-height: 1.1;
`;

export const TopBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: darkcyan;
    color:red;

    h2 {
        opacity: 1;
    }

    ul {
    display: flex;
    gap: 1rem;
    }
`;