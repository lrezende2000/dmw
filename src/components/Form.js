import { useState } from 'react';
import styled from 'styled-components';

import { githubAPI } from '../services/github';

import Loading from './Loading';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-6x);
`;

const Row = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

const Label = styled.label`
  background-color: var(--gray);
  border-radius: var(--space-2x);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  display: block;

  &.focused {
    background-color: #33373c;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  outline: none;
  height: 56px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: var(--text-md);
  color: #fff;
  font-family: inherit;

  @media (min-width: 768px) {
    width: calc(100% - var(--space-32x));
    padding-right: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  margin-top: var(--space-4x);
  border-radius: var(--space-2x);
  border: 1px solid var(--primary-color);
  background: var(--primary-color);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--text-md);
  letter-spacing: -0.02em;
  outline: none;
  font-weight: 500;
  color: white;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 120px;
    height: 40px;
    margin-top: 0;
    position: absolute;
    border-radius: 5px;
    right: var(--space-2x);
    top: var(--space-2x);
  }
`;

const LoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-12x);
`;

export default function Form() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length) {
      setLoading(true);
      getGithubUser(email);
    } else {}
  }

  const getGithubUser = async (user) => {
    if (user) {
      try {
        const { data } = await githubAPI.get(`users/${user}`);

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }

    setLoading(false);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Row>
        <Label className={(focused ? 'focused' : '')}>
          <Input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Digite seu email ou usuário do github"
            required
          />
        </Label>
        <SubmitButton>Cadastrar</SubmitButton>
        {
          loading && (
            <LoadContainer>
              <Loading />
            </LoadContainer>
          )
        }
      </Row>
    </FormContainer>
  );
}