import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';

import Home from './pages/Home';

function getIconByTitle(title) {
  switch (title) {
    case 'Histórias de Vooa':
      return 'book';
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
          key="vooa"
          component={Home}
          title="Histórias de Vooa"
          icon={TabIcon}
          hideNavBar
        />
      </Stack>
    </Router>
  );
}
