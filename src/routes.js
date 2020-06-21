import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';

import Home from './pages/Home';

function getIconByTitle(title) {
  switch (title) {
    case 'Paises':
      return 'flag';
    case 'Estados':
      return 'road';
    default:
      return 'tachometer';
  }
}
function TabIcon({focused, title}) {
  const color = focused ? '#6F2682' : '#3D2B40';
  return (
    <View>
      <Icon type="font-awesome" name={getIconByTitle(title)} color={color} />
    </View>
  );
}

export default function Routes() {
  return (
    <Router>
      <Stack key="root" tabs={true} activeTintColor="#6F2682">
        <Scene
          key="Home"
          component={Home}
          title="Vista inicial"
          icon={TabIcon}
          hideNavBar
        />
      </Stack>
    </Router>
  );
}
