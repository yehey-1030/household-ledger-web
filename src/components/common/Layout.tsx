import styled from 'styled-components';

interface ILayout {
  children: React.ReactNode;
  sidePadding?: boolean;
}
function Layout({ children, sidePadding = false }: ILayout) {
  return <Wrapper sidePadding={sidePadding}>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div<{ sidePadding: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.sidePadding ? '0rem 1.7rem' : 0)};
`;
