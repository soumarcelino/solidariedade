import React from 'react';
import {
  TouchableOpacity,
  Linking,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {Title} from 'react-native-paper';

const VOAA_URL = 'https://voaa.me/';
const KICKANTE_URL = 'https://www.kickante.com.br/';

export default function About() {
  return (
    <ScrollView>
      <>
        <Title style={styles.title}>Solidariedade</Title>
        <Text style={styles.textContent}>
          É isso que propomos ao apresentar nossa plataforma, um lugar único
          onde você possa encontrar várias histórias de pessoas que precisam de
          uma ajuda, temos como objetivo aproximar as pessoas, pois juntos
          podemos construir uma sociedade mais justa e feliz!
        </Text>
        <Text style={styles.textContent}>
          Temos como apoio duas grandes plataformas, mas estamos em constante
          evolução e logo teremos muito mais!
        </Text>

        <TouchableOpacity
          style={styles.banner}
          onPress={() => {
            Linking.openURL(VOAA_URL);
          }}>
          <Title style={styles.title}>Conheça o trabalho da Voaa</Title>
          <Image
            source={require('../media/logo_voaa.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

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
      </>
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
  logoKickante: {backgroundColor: '#fff', resizeMode: 'contain', width: '100%', marginBottom: 30},
  subtitle: {color: '#000'},
  card: {margin: 5},
  cardTitle: {color: '#FFF', ...textWithShadow},
  textContent: {
    color: '#000',
    fontSize: 20,
    textAlign: 'justify',
    margin: 15,
  },
});
