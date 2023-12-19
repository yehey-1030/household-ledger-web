import styled from 'styled-components';
import P from './P';
import { theme } from '@/styles';

interface IHashTagProps {
  label: string;
  archiveType?: string;
}

function HashTag({ label, archiveType = '3' }: IHashTagProps) {
  return <StyledTag archiveType={archiveType}>#{label}</StyledTag>;
}

export default HashTag;

const StyledTag = styled(P).attrs({
  fontWeight: theme.font.fontWeight.semibold,
  fontSize: theme.font.fontSize[14],
})<{ archiveType: string }>`
  color: ${(props) => theme.color.LEDGER_HASHTAG_COLOR[props.archiveType]};
  margin: 1rem 0.3rem 0rem;
`;
