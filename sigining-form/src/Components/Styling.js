import styled from "styled-components";

const media = {
    mobile: '@media(max-width: 60rem)'
}


export const Wrapppers = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
align-items: center;
align-items: center;
margin: 6rem 20rem;

// ${media.mobile}{
//     display: flex;
//     align-content: center;
//     justify-content: center;
//     align-items: center;
//     width: 12rem;
//     margin: 3rem;
// }

`;

export const Text = styled.h1`
font-size: 1.8rem;
margin-bottom: 5rem;

`;

export const ErrorMessage = styled.p`
color: red;

`;
export const LoginContainer = styled.div`
text-align: center;
display: flex;
align-content: center;
align-items: center;
justify-content: center;
flex-direction: column;

`;

export const Form = styled.form`
display: flex;
border: 0.1rem solid #ddd;
flex-direction: column;
padding: 1.2rem;
align-items: center;
height:19rem;
width: 19rem;

// ${media.mobile}{
//     display: flex;
//     align-content: center;
//     justify-content: center;
//     width: 12rem;
//     margin: 3rem;
//     align-items: center;
// }
`;

export const Input = styled.input`
margin: 1rem 0;
height: 2.5rem;
width: 16rem;
padding-left: 0.5rem;
`;

export const SearchInput = styled.input`
margin: 1rem 0;
height: 2.5rem;
padding-left: 0.5rem;
`;
export const Row = styled.div`
flex-direction: row;
justify-contents: center;
align-items: center;
`;

export const Buttons = styled.button`
color: white;
background-color: green;
width: 12rem;
height: 2.5rem;
align-self: center;
margin-top: 1.2rem;
border-radius: 0.3rem;
border-color: none;
`;

export const SearchButtons = styled.button`
color: white;
background-color: blue;
width: 6rem;
height: 2.8rem;
align-self: center;
margin-top: 1.2rem;
border-radius: 0.3rem;
border-color: none;
`;


export const LogoutButtons = styled.button`
color: white;
border-color: grey;
width: 70px;
height: 30px;
align-self: center;
margin-top: 1.2rem;
border-radius: 0.3rem;
border-color: none;
align-self: flex-end;
`;


