import React, { useState, useEffect } from 'react';

import {
  Container,
  GreetingContainer,
  Greeting,
  UserName,
  UserAvatar,
} from './styles';

import Storage from '../../utils/storage';
import Constants from '../../utils/constants';
import avatar from '../../../assets/avatar.jpeg';

type User = {
  name: string;
  image: string;
}; 

const data = {
  greeting: 'Olá,',
  user: {
    name: '',
    image: '',
  },
};

const Header = () => {
  const [user, setUser] = useState<User>(data.user);

  useEffect(() => {
    loadUserName();
  }, []);

  const loadUserName = async () => {
    const stored = await Storage.get(Constants.STORAGE_USER);

    if (stored) {
      const user = JSON.parse(stored);

      setUser(user);
    }
  };

  const userAvatar = user.image ? { uri: user.image } : avatar;

  return (
    <Container>
      <GreetingContainer>
        <Greeting>
          {data.greeting}
        </Greeting>
        <UserName>
          {user.name}
        </UserName>
      </GreetingContainer>
      <UserAvatar source={userAvatar} />
    </Container>
  );
};

export default Header;
