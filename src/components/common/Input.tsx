import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'text' | 'date' | 'number';
}

function Input({ label, type = 'text', placeholder, name, onChange, value }: IInputProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} />
    </Wrapper>
  );
}

export default React.memo(Input);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: ${theme.font.fontSize[16]};
  font-weight: ${theme.font.fontWeight.semibold};
  color: ${theme.color.GREY[200]};
  margin-bottom: 0.8rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  border-radius: 8px;

  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  background-color: ${theme.color.WHITE};
  border: none;
  outline: none;

  ::placeholder {
    color: ${theme.color.GREY[300]};
    font-size: ${theme.font.fontSize[14]};
    font-weight: ${theme.font.fontWeight.regular};
  }
`;
