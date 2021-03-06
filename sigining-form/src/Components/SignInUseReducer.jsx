import React, { useReducer } from "react";
import {
  Wrapper,
  LoginContainer,
  Form,
  Buttons,
  Input,
  Text,
  LogoutButtons,
  ErrorMessage,
  Header,
  LoginTitle,
  Container
} from "./Styling";
import signInReducer from "./utils/signInReducer";
import { login } from "./utils/login";
import SearchFilter from "./SearchFilter/SearchFilter";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  isSignedUp: false,
};

const SignInUseReducer = () => {
  const [state, dispatch] = useReducer(signInReducer, initialState);

  const onSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: "Login" });

    try {
      await login({ email, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  const { email, password, isLoading, error, isSignedUp } = state;

  return (
    <Wrapper>
      {isSignedUp ? (
        <Container>
          <Header>
          <LoginTitle>Welcome!</LoginTitle>
            <LogoutButtons
              color="primary"
              onClick={() => dispatch({ type: "logOut" })}
            >
              Log Out
            </LogoutButtons>
           
          </Header>
          <SearchFilter />
        </Container>
      ) : (
        <LoginContainer>
          <Text>My Form application</Text>
          <Form className="form" onSubmit={onSubmit}>
            {error && <ErrorMessage className="error">{error}</ErrorMessage>}
            <p>Please Sign in!</p>

            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) =>
                dispatch({
                  type: "field",
                  fieldName: "email",
                  payload: event.target.value,
                })
              }
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: event.target.value,
                })
              }
            />

            <Buttons className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "signing in..." : "Login"}
            </Buttons>
          </Form>
        </LoginContainer>
      )}
    </Wrapper>
  );
};

export default SignInUseReducer;
