import React from 'react';

import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {Linking} from 'react-native';

export default function ({title, content, imageURI, articleURL}) {
  return (
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: imageURI}} />
      <Card.Actions>
        <Button
          onPress={() => {
            Linking.openURL(articleURL);
          }}>
          Abrir história
        </Button>
      </Card.Actions>
    </Card>
  );
}
