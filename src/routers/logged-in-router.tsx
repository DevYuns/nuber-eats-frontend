import {FC} from 'react';
import {isLoggedInVar} from '../apollo';

interface Props {}

export const LoggedInRouter: FC<Props> = () => (
  <div>
    <h1>Logged In</h1>
    <button onClick={() => isLoggedInVar(false)}>Log Out</button>
  </div>
);
