import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo.svg';
import { Button, Input } from 'react-native-elements';

const ViewLogin: React.FC = ({ navigation }: any) => {
  const handleMoveToTypePerson = () => {
    navigation.navigate('ViewTypePerson');
  }

  return (
    <View style={styles.container}>
      <View>
        <Logo 
          style={styles.logo}
          width={140}
          height={140}
        />
        <Text style={styles.title}>
          Organize
        </Text>
      </View>

      <View style={styles.view_input}>
        <Input 
          containerStyle={styles.input_container}
          inputStyle={styles.input}
          placeholder="Digite seu Cpf"
          autoFocus={true}
          autoCapitalize="none"
        />
        <Input 
          containerStyle={styles.input_container}
          inputStyle={styles.input}
          placeholder="Digite sua senha"
          autoFocus={true}
        />
      </View>
      <View style={styles.view_buttons}>
        <Button 
          buttonStyle={styles.btn_acessar}
          titleStyle={styles.btn_acessar_text}
          title="Acessar"
        />
        <Button
          onPress={handleMoveToTypePerson} 
          buttonStyle={styles.btn_cadastrar}
          titleStyle={styles.btn_cadastrar_text}
          title="Cadastrar"
        />
      </View>
    </View>
  );
}

export default ViewLogin;