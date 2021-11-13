import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RouteProp, ParamListBase, useRoute } from '@react-navigation/core';

import { styles } from './styles';
import Logo from '../../assets/logo.svg';
import Inputs from '../../components/Inputs';
import { Button } from 'react-native-elements';

interface IRouter extends RouteProp<ParamListBase, string> {
  params: {
    type: string;
  }
}

interface IUser {
  nome: string;
  cpf: string;
  crp: string;
  senha: string;
  estado: string;
  cidade: string;
}

const ViewAboutMeInfo: React.FC = ({ navigation }: any) => {
  const [ user, setUser ] = useState({} as IUser);
  const router = useRoute<IRouter>();
  const type = router?.params?.type;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo 
          width={147}
          height={147}
          style={styles.logo}
        />
        <Text style={styles.title}>Organize</Text>
      </View>
      <ScrollView>
        <Inputs
          onChangeText={
            (text) =>  setUser({
              ...user,
              nome: text
            })
          }
          value={user.nome} 
          placeholder="Digite seu Nome"
        />
        <Inputs
          onChangeText={
            (text) =>  setUser({
              ...user,
              cpf: text
            })
          }
          value={user.cpf} 
          placeholder="Digite seu Cpf"
        />
        {type === 'psicologo' && 
          <Inputs
          onChangeText={
            (text) =>  setUser({
              ...user,
              crp: text
            })
          }
          value={user.crp} 
          placeholder="Digite seu CRP"
        />}
        <Inputs
          onChangeText={
            (text) =>  setUser({
              ...user,
              senha: text
            })
          } 
          value={user.senha} 
          placeholder="Digite sua Senha"
        />
        <Inputs 
          onChangeText={
            (text) =>  setUser({
              ...user,
              estado: text
            })
          } 
          value={user.estado}
          placeholder="Digite seu Estado"
        />
        <Inputs
          onChangeText={
            (text) =>  setUser({
              ...user,
              cidade: text
            })
          } 
          value={user.cidade}
          placeholder="Digite seu Cidade"
        />
      </ScrollView>
      <View style={styles.buttons}>
        <Button 
          title="Salvar"
          buttonStyle={styles.btn_salvar}
          containerStyle={styles.btn_salvar_container}
          titleStyle={styles.btn_salvar_text}
        />
        <Button
          onPress={() => navigation.goBack()} 
          title="Cancelar"
          buttonStyle={styles.btn_cancelar}
          containerStyle={styles.btn_cancelar_container}
          titleStyle={styles.btn_cancelar_text}
        />
      </View>
    </View>
  );
}

export default ViewAboutMeInfo;