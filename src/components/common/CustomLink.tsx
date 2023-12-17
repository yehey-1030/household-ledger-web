import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface ICustomLinkProps extends LinkProps {
  children?: React.ReactNode;
}

function CustomLink({ href, children }: ICustomLinkProps) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

export default CustomLink;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
