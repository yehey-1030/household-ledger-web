import styled from 'styled-components';
import { Divider, HashTagButton, P } from '../common';
import { theme } from '@/styles';
import { amountTostring, setPointToNumber } from '@/lib/utils/string';
import { useState } from 'react';
import DetailTagStatisticList from './DetailTagStatisticList';

interface ITagStatisticItemProps {
  tagName: string;
  tagID: number;
  currentAmount: number;
  totalAmount: number;
}

function TagStatisticItem({ tagName, tagID, currentAmount, totalAmount }: ITagStatisticItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <HashTagButton isSelected label={tagName} />
        <AmountText>
          {amountTostring(currentAmount)} ・ {setPointToNumber((currentAmount / totalAmount) * 100)}
        </AmountText>
      </Wrapper>
      <ExtendWrapper isOpen={isOpen}>
        <DetailTagStatisticList total={totalAmount} parentTagTotal={currentAmount} currentTag={tagID} />
      </ExtendWrapper>
      <Divider />
    </>
  );
}

export default TagStatisticItem;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AmountText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  overflow: hidden;
`;
