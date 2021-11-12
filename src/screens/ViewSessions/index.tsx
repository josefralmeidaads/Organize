import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/psicologo2.png';
import CardSession from '../../components/CardSession';

const ViewSessions: React.FC = () => {
  const data = [
    { id: 0, number: 1 },
    { id: 1, number: 2 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>
          Olá Larissa Toledo
        </Text>
        <Image source={avatar}/>
      </View>

      <View>
        <Text style={styles.title_pt_1}>
          Minhas
        </Text >
        <Text style={styles.title_pt_2}>
          Sessões
        </Text >
      </View>

      <FlatList 
        data={data}
        style={{
          marginTop: 20,
        }}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardSession />
        )}
      />
    </View>
  );
}

export default ViewSessions;