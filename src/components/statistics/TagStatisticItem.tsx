import styled from 'styled-components';
import { Divider, P } from '../common';
import { theme } from '@/styles';
import { amountTostring, setPointToNumber } from '@/lib/utils/string';
import { useState } from 'react';
import DetailTagStatisticList from './DetailTagStatisticList';
import { useRecoilValue } from 'recoil';
import { currentArchiveTypeColor } from '@/lib/store';

interface ITagStatisticItemProps {
  tagName: string;
  tagID: number;
  currentAmount: number;
  totalAmount: number;
}

function TagStatisticItem({ tagName, tagID, currentAmount, totalAmount }: ITagStatisticItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const color = useRecoilValue(currentArchiveTypeColor);
  return (
    <>
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <RootTagText color={color}>#{tagName}</RootTagText>
        <AmountText>
          {amountTostring(currentAmount)} ・ {setPointToNumber((currentAmount / totalAmount) * 100)}
        </AmountText>
      </Wrapper>
      <ExtendWrapper isOpen={isOpen}>
        <DetailTagStatisticList total={totalAmount} parentTagTotal={currentAmount} currentTag={tagID} color={color} />
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

const RootTagText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.semibold,
})`
  color: ${(props) => theme.color.LEDGER_HASHTAG_COLOR[props.color ?? 'green']};
  margin: 0.4rem 0.6rem;
`;

const AmountText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  overflow: hidden;
`;
