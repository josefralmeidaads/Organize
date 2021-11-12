import React from 'react';
import { FlatList, View } from 'react-native';
import CardPsicologist from '../../components/CardPsicologist';
import NavHeader from './components/NavHeader';

import { styles } from './styles';

const ViewMain: React.FC = () => {
  const data = [0, 1, 2];
  return (
    <View style={styles.container}>
      <NavHeader/>
      <FlatList
        data={data}
        // keyExtractor={(item) => String(item.key)} 
        renderItem={({ item }) => (
          <CardPsicologist />
        )}
      />
    </View>
  );
}

export default ViewMain;