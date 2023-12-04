import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles';

export interface IPProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
  width?: string;
  height?: string;
  textAlign?: string;
  textDecoration?: 'none' | 'line-through' | ' overline' | 'underline' | ' initial' | ' inherit';
  lineHeight?: number | string;
  ellipsis?: boolean;
  numOfLines?: number;
}

function P(props: IPProps) {
  return <StyledP {...props} />;
}

const StyledP = styled.p<IPProps>`
  ${({
    fontSize,
    fontWeight,
    color,
    width,
    height,
    textAlign,
    textDecoration,
    lineHeight,
    ellipsis,
    numOfLines,
  }: IPProps) => {
    return `
      padding: 0;
      margin: 0;
      font-size:${fontSize ?? theme.font.fontSize[16]};
      font-weight: ${fontWeight ?? theme.font.fontWeight.medium};
      color: ${color ?? theme.color.GREY[200]};
      width: ${width ?? 'fit-content'};
      height: ${height ?? 'fit-content'};
      text-align: ${textAlign ?? 'left'};
      text-decoration: ${textDecoration ?? 'none'};
      line-height: ${lineHeight ?? 'normal'};
      ${
        ellipsis &&
        numOfLines &&
        ` overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: ${numOfLines};
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          `
      }
      `;
  }}
`;

export default React.memo(P);
