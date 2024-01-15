import { theme } from '@/styles';
import styled from 'styled-components';

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function CheckBox({ label, onChange, value, name, checked }: ICheckBoxProps) {
  return (
    <Wrapper>
      <StyledCheckbox type="checkbox" onChange={onChange} checked={checked} value={value} name={name} />
      <Label>{label}</Label>
    </Wrapper>
  );
}
export default CheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  font-size: ${theme.font.fontSize[16]};
  font-weight: ${theme.font.fontWeight.semibold};
  color: ${theme.color.GREY[200]};
`;

const StyledCheckbox = styled.input`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 0.3rem;
  background-color: ${theme.color.WHITE};
  border: 0px;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    border: none;
    background-color: ${theme.color.MAJOR_GREEN[200]};
    background-size: 100% 100%;
    background-position: 50%;
  }
`;
