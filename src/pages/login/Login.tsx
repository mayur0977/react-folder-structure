import useLogin from './hooks/useLogin';

function Login() {
  const { authData, isLoading, loginUser } = useLogin();

  const onsubmit = () => {
    loginUser({ email: 'mayur@gmail.com', password: '12345' });
  };
  return <div>Login</div>;
}

export default Login;
