import { toast } from 'react-toastify';

import Success from '../../public/success-svgrepo-com.svg';
import { Container, Icon } from './styles';

const ToastIcon = () => {
  return <Icon src={Success} alt="success" />;
};

const showToast = (message) => {
  return (
    <>
      {toast.success(
        <Container>
          <ToastIcon />
          {message}
        </Container>,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      )}
    </>
  );
};

export { showToast };
