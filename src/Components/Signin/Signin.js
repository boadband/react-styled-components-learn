import React from "react";
import {
  Container,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./Signin.Elements";

const Signin = () => {
  return (
    <div>
      <Container>
        <FormWrapper>
          <Icon to="/">Portfolio</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>go go go</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" require />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" require />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forget password</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </div>
  );
};

export default Signin;
