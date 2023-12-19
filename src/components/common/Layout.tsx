import styled from 'styled-components';

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;
