import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const ToastContainerStyle = styled(ToastContainer)`
  .Toastify__toast--success {
    background: ${({ theme }) => theme.toast};
    border-radius: 4px;
    color: #222;
  }
  .Toastify__progress-bar {
    background: ${({ theme }) => theme.button};
  }
  .Toastify__toast-body {
    color: ${({ theme }) => theme.body};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 7%;
  color: #fff;
  margin: 0 10px 0 0;
`;

export { ToastContainerStyle, Container, Icon };
