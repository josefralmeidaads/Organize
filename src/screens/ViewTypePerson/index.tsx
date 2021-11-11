import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { styles } from './styles';
import psico from '../../assets/psico.png';
import client from '../../assets/client.png';
import { Icon } from 'react-native-elements';

const ViewTypePerson: React.FC = ({ navigation }: any) => {
  const handleMoveToViewCreateAccountUser = (params: 'psicologo' | 'cliente') => {
    navigation.navigate('ViewCreateAccountUser', { type: params })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Me conte sobre você
      </Text>

      <View style={styles.options}>
        <Button
          onPress={() => handleMoveToViewCreateAccountUser("psicologo")}
          iconPosition="left"
          title="Psicólogo"
          buttonStyle={styles.btnPsico}
          titleStyle={styles.btnPsico_text}
          icon={
            <Image 
              source={psico}
            />
          }
        />
        <Button
          onPress={() => handleMoveToViewCreateAccountUser("cliente")} 
          iconPosition="right"
          title="Cliente"
          buttonStyle={styles.btnClient}
          titleStyle={styles.btnClient_text}
          icon={
            <Image 
              source={client}
            />
          }
        />
      </View>
      <Button
        onPress={() => navigation.goBack()}
        icon={
          <Icon
            tvParallaxProperties 
            type="font-awesome-5"
            color="#FFF"
            name="chevron-left"
            size={20}
          />
        } 
        buttonStyle={styles.button}
      />
    </View>
  );
}

export default ViewTypePerson;