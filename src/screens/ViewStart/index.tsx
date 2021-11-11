import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Image from '../../assets/image1.svg';
import { styles } from './styles';

const ViewStart: React.FC = ({ navigation }: any) => {
  
  const handleMoveToViewLogin = () => {
    navigation.navigate('ViewLogin');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Encontre{'\n'} um psicologo{'\n'} Sem sair de Casa.
      </Text>
      <Image 
        width={200} 
        height={150}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Em momentos de distanciamento{'\n'}
        social, sua saúde, será nosso foco.
      </Text>
      <Button
        onPress={handleMoveToViewLogin} 
        icon={
          <Icon 
            tvParallaxProperties
            type="font-awesome-5"
            name="chevron-right"
            size={20}
            color="#FFF"
          />
        }
        buttonStyle={styles.button}
        containerStyle={styles.button_container}
      />
    </View>
  );
}

export default ViewStart;