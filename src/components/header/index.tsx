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

  const loadUserName = async () => {
    const stored = await Storage.get(Constants.STORAGE_USER);
    const user = stored ? JSON.parse(stored) : data.user;
    setUser(user);
  };

  useEffect(() => {
    loadUserName();
  }, []);

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
