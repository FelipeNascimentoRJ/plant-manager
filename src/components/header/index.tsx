import React from 'react';

import {
  Container,
  GreetingContainer,
  Greeting,
  UserName,
  UserAvatar,
} from './styles';

const data = {
  greeting: 'Olá,',
  userName: 'Felipe',
  userImage: 'https://avatars.githubusercontent.com/u/47644551?v=4',
};

const Header = () => {
  return (
    <Container>
      <GreetingContainer>
        <Greeting>
          {data.greeting}
        </Greeting>
        <UserName>
          {data.userName}
        </UserName>
      </GreetingContainer>
      <UserAvatar source={{ uri: data.userImage }} />
    </Container>
  );
};

export default Header;
