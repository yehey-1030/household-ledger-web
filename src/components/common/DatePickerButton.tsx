import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { theme } from '@/styles';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/calendar.css';
import { useState } from 'react';

interface IDatePickerButtonProps {
  isColored?: boolean;
  onChange: (date: Date, name: string) => void;
  label?: string;
  name: string;
  selected: string;
}

function DatePickerButton({ label, name, onChange, selected, isColored = false }: IDatePickerButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date: Date) => {
    setIsOpen(!isOpen);
    onChange(date, name);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledButton isColored={isColored} onClick={handleClick}>
        {selected}
      </StyledButton>
      {isOpen && (
        <DateWrapper isOpen={isOpen} hasLabel={!!label}>
          <ReactDatePicker name={name} locale={ko} onChange={handleChange} dateFormat="yyyy-MM-dd" inline />
        </DateWrapper>
      )}
    </Wrapper>
  );
}
export default DatePickerButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const Label = styled.label`
  font-size: ${theme.font.fontSize[16]};
  font-weight: ${theme.font.fontWeight.semibold};
  color: ${theme.color.GREY[200]};
  margin-bottom: 0.8rem;
  width: 100%;
`;

const StyledButton = styled.button<{ isColored: boolean }>`
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  background-color: ${(props) => (props.isColored ? theme.color.MAJOR_GREEN[300] : theme.color.WHITE)};

  border: none;
  outline: none;
`;

const DateWrapper = styled.ul<{ isOpen: boolean; hasLabel: boolean }>`
  position: absolute;
  top: ${(props) => (props.hasLabel ? '7rem' : '4.5rem')};
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: transparent; */

  border-radius: 0.8rem;
  box-shadow: 0px 1px 4px 0px ${theme.color.GREY[300]};

  height: ${(props) => (props.isOpen ? 'none' : 0)};
  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  overflow: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 15;

  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 1s ease;
`;
