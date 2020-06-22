import React from 'react';
import {Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import uuid from 'react-uuid';

import Card from '../components/Card';

import {FlatList, ScrollView, Image} from 'react-native';

import useVoaData from '../hooks/useVoaData';

const VOA_URL = 'https://voaa.me';

function mountArticleURL(link) {
  return `${VOA_URL}${link}`;
}

export default function Home() {
  const {data, isLoading} = useVoaData();

  if (isLoading) {
    return <Title style={styles.pageTitle}>Carregando dados...</Title>;
  }

  return (
    <ScrollView>
      <Title style={styles.title}>Histórias de Voaa</Title>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            content={item.description}
            imageURI={item.image}
            articleURL={mountArticleURL(item.link)}
          />
        )}
        keyExtractor={() => uuid()}
      />
      <Title style={styles.title}>Conheça outras histórias de Vooa</Title>
      <Image source={require('../media/logo_voaa.png')} style={styles.logo} />
    </ScrollView>
  );
}
const textWithShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 4,
};

const styles = StyleSheet.create({
  title: {padding: 10, color: '#6F2682'},
  logo: {backgroundColor: '#77087D', resizeMode: 'cover'},
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
