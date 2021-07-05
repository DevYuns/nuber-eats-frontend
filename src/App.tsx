import {useReactiveVar} from '@apollo/client';
import {isLoggedInVar} from './apollo';
import {LoggedInRouter} from './routers/logged-in-router';
import {LoggedOutRouter} from './routers/logged-out-router';
import {ReactElement} from 'react';

function App(): ReactElement {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
