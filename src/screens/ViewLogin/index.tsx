import React, { useState } from 'react';
import { Alert, Text, View, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'react-native-elements';

import { styles } from './styles';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { addUserLogged } from '../../store/modules/userLogged/actions';


interface ICredentials {
  cpf: string;
  senha: string;
}

const ViewLogin: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [ credentials, setCredentials ] = useState({} as ICredentials)
  const handleMoveToTypePerson = () => {
    navigation.navigate('ViewTypePerson');
  }

  const handleMoveToViewMain = async() => {
    try{
      const response = await api.post('autenticacao', { cpf: credentials.cpf, senha: credentials.senha });
      AsyncStorage.setItem('@user:', JSON.stringify(response.data));
      dispatch(addUserLogged(response.data))
      return navigation.navigate('AuthRoutes');
    }catch(err){
      return Alert.alert('Error!','Verifique suas credenciais!');
    }
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
          value={credentials.cpf}
          onChangeText={(text) => setCredentials({...credentials, cpf: text})}
        />
        <Input
          secureTextEntry={true}
          containerStyle={styles.input_container}
          inputStyle={styles.input}
          placeholder="Digite sua senha"
          autoFocus={true}
          value={credentials.senha}
          onChangeText={(text) => setCredentials({...credentials, senha: text})}
        />
      </View>
      <View style={styles.view_buttons}>
        <Button
          onPress={handleMoveToViewMain} 
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