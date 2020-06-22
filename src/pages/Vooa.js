import React from 'react';
import {Title} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, Linking} from 'react-native';

import uuid from 'react-uuid';

import Card from '../components/Card';

import {FlatList, ScrollView, Image} from 'react-native';

import useVoaData from '../hooks/useVoaData';
import useKickanteData from '../hooks/useKickanteData';

const VOAA_URL = 'https://voaa.me/';
const KICKANTE_URL = 'https://www.kickante.com.br/';

export default function Vooa() {
  const {data, isLoading} = useVoaData();
  const {data: kickanteData, isLoadingKickante} = useKickanteData();

  if (isLoading || isLoadingKickante) {
    return <Title style={styles.pageTitle}>Carregando dados...</Title>;
  }

  return (
    <ScrollView>
      <Title style={styles.title}>Histórias de Voaa</Title>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => {
          Linking.openURL(VOAA_URL);
        }}>
        <Title style={styles.title}>Conheça o trabalho da Voaa</Title>
        <Image source={require('../media/logo_voaa.png')} style={styles.logo} />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            content={item.description}
            imageURI={item.image}
            articleURL={item.link}
          />
        )}
        keyExtractor={() => uuid()}
      />
      <Title style={styles.title}>Histórias de kickante</Title>
      <TouchableOpacity
        style={styles.bannerKickante}
        onPress={() => {
          Linking.openURL(KICKANTE_URL);
        }}>
        <Title style={styles.title}>Conheça o trabalho da Kickante</Title>
        <Image
          source={require('../media/logo_kickante.png')}
          style={styles.logoKickante}
        />
      </TouchableOpacity>
      <FlatList
        data={kickanteData}
        renderItem={({item}) => (
          <Card
            title={item.title}
            content={item.description}
            imageURI={item.image}
            articleURL={item.link}
          />
        )}
        keyExtractor={() => uuid()}
      />
    </ScrollView>
  );
}
const textWithShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 4,
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    color: '#6F2682',
    textAlign: 'center',
  },
  banner: {display: 'flex', justifyContent: 'center', flexDirection: 'column'},
  logo: {backgroundColor: '#77087D', resizeMode: 'contain', width: '100%'},
  logoKickante: {backgroundColor: '#fff', resizeMode: 'contain', width: '100%'},
  subtitle: {color: '#000'},
  card: {margin: 5},
  cardTitle: {color: '#FFF', ...textWithShadow},
  textContent: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    ...textWithShadow,
    textAlign: 'right',
  },
});
