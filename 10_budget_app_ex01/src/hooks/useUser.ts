import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../state/UserContext';
import {IUserData} from '../ts/interfaces/user';

// Todo

interface IUseUser {
  dispatchUser: () => void;
  updatedUser: IUserData;
}

const useUser = ({dispatchUser, updatedUser}: IUseUser) => {
  const {state, dispatch} = useContext(UserContext);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
    }
  }, []);
};
