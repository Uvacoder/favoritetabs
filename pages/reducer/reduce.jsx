const { useReducer, useEffect } = require("react");

const initialState = {
  isLoading: true,
  hasError: false,
  users: []
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'sucess':
    return {
      isLoading: false,
      hasError: false,
      users: action.payload.users
    }
  case 'error':
    return {
      isLoading: false,
      hasError: true,
      users: []
    }
  default:
    throw new Error('Invalid action type');
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = async () => {
    try {
      const { data } = await services.getUsers();
      dispatch({ type: 'sucess', payload: { users: data } })
    } catch (err) {
      dispatch({ type: 'error' })
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <ul>
        {state.users.map(user => {
          return (
            <li key={use}>{user}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Login;
