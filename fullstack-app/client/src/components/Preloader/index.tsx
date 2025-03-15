import { FaStore } from 'react-icons/fa';
import { LoaderContainer, SpinnerContainer, Spinner, PulsingIcon } from './styles';

const Preloader = () => {
  return (
    <LoaderContainer>
      <SpinnerContainer>
        <PulsingIcon>
          <FaStore size={40} />
        </PulsingIcon>
        <Spinner />
      </SpinnerContainer>
    </LoaderContainer>
  );
};

export default Preloader;
