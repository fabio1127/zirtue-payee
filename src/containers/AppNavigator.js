import {
  StackNavigator,
} from 'react-navigation';

import Login from './Login';

const MainNavigator = StackNavigator(
  {
    login: {
      screen: Login,
    },
  },
);

export default MainNavigator;
