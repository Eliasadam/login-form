import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  height: 8rem;
  background-color: #0d506a;
  // justify-content: center;
  box-shadow: 0 4px 6px #000;
`;
export const LoginContainer = styled.div`
  text-align: center;
  // max-width: 100%;
  align-self: flex-end;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginTitle = styled.h1`
  font-size: 1.8rem;
  width: 60px;
  color: #ffff;
  text-align: center;
  margin-left: 1rem;
`;
export const Text = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 5rem;
  color: #0d506a;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Form = styled.form`
  display: flex;
  border: 0.1rem solid #0d506a;
  flex-direction: column;
  padding: 1.2rem;
  align-items: center;
  height: 19rem;
  width: 19rem;
  margin-top: 2.4rem;
  background-color: #f3feef;
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
export const SearchForm = styled.form`
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`;

export const Buttons = styled.button`
  color: white;
  background-color: #0d506a;
  width: 12rem;
  height: 2.5rem;
  align-self: center;
  margin-top: 1.2rem;
  border-radius: 0.3rem;
  border-color: none;
`;

export const SearchButtons = styled.button`
  color: white;
  background-color: #0d506a;
  width: 6rem;
  height: 2.8rem;
  align-self: center;
  margin-top: 1.2rem;
  margin-left: 1rem;
  border-radius: 0.3rem;
  border-color: none;
`;

export const LogoutButtons = styled.button`
  color: white;
  background-color: #0d506a;
  padding: 0.8rem;
  border-radius: 0.3rem;
  border-color: white;
  margin-right: 1rem;
`;

export const CardWrapper = styled.div`
  display: block;
  flex: 1;
  box-shadow: 0 4px 6px #0d506a;
  background-color: #f3feef;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 220px;
  margin: 1rem;
  padding: 0.5rem;
`;
export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5rem;
`;
export const CardTitle = styled.p`
  font-size: 12px;
  align-self: center;
  margin: 1rem;
  text-align: center;
`;
export const CardImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 0.5rem;
  border-radius: 0.2rem;
`;
