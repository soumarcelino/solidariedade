import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';
import {View, Image} from 'react-native';

import Vooa from './pages/Vooa';
import About from './pages/About';


function getIconByTitle(title) {
  switch (title) {
    case 'Histórias':
      return 'television';
    default:
      return 'users';
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
          component={Vooa}
          title="Histórias"
          icon={TabIcon}
          hideNavBar
        />
        <Scene
          key="about"
          component={About}
          title="Solidariedade"
          icon={TabIcon}
          hideNavBar
        />
      </Stack>
    </Router>
  );
}
