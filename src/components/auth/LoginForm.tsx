import { theme } from '@/styles';
import styled from 'styled-components';
import { Icon } from '../common';
import { useLogin } from '@/lib/hooks/auth';

function LoginForm() {
  const { login } = useLogin();

  return (
    <Wrapper>
      <Icon iconName="savings" size="20rem" />
      <PWInput
        placeholder="패스워드를 입력해주세요"
        type="password"
        onChange={(e) => {
          login(e.currentTarget.value);
        }}
      />
    </Wrapper>
  );
}

export default LoginForm;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${theme.color.MAJOR_GREEN[300]};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 18rem;
`;

const PWInput = styled.input`
  padding: 1.5rem;
  width: 20rem;
  border-radius: 8px;

  margin-top: 4rem;

  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  background-color: ${theme.color.WHITE};

  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.color.GREY[300]};
  }
`;
