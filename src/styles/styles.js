import styled from 'styled-components';

export const Title = styled.h1`
color:white;
font-size: 3.2em;
line-height: 1.1;
margin-bottom: 40px;
text-align: center;
`;

export const Topbar_nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #0A628E;
    color:black;
    height: 80px;
    
    a {
        opacity: 1;
        text-decoration: none;

    }

    h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        size: 1em;
        color: white;
    }

    h2{
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        size: 1em;
    }

    li{
        list-style: none;
        float: right;
        padding: 1rem;
        color: white;
    }

    
    ul{
    gap: 1rem;
    color: whites;
    }

`;

export const Container = styled.div`
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;

`;

export const Fetch_line = styled.div`
  display: inline-block;
  border-top: 3px solid white;
  width: 1000px;
`;

export const RecoilDiv = styled.div`
height: 100%;
`;

export const NovoPostInput = styled.input`
`;

export const NovoPostTextField = styled.textarea`
border: 0;
border-bottom: 2px solid black;
background-color: transparent;
resize: none;
`