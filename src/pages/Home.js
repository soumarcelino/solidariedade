import React from 'react';
import {Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default function Home() {
  return (
    <>
      <Title style={styles.pageTitle}>
        Página inicial
      </Title>
    </>
  );
}
const textWithShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 4,
};

const styles = StyleSheet.create({
  pageTitle: {padding: 10, color: '#6F2682'},
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
