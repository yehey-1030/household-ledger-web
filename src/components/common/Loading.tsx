import styled from 'styled-components';
import spinner from '@/assets/images/spinner.svg';
import Image from 'next/image';

function Loading() {
  return (
    <Background>
      <Image src={spinner} alt="" width={50} />
    </Background>
  );
}

export default Loading;

const Background = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  z-index: 25;

  background: rgba(255, 255, 255, 0.227);
  backdrop-filter: blur(4px);
`;
