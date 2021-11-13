import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { RouteProp, ParamListBase, useRoute } from '@react-navigation/core';

import { styles } from './styles';
import Logo from '../../assets/logo.svg';
import Inputs from '../../components/Inputs';
import { Button } from 'react-native-elements';
import { IUserState } from '../../store/modules/user/types';
import api from '../../services/api';

interface IRouter extends RouteProp<ParamListBase, string> {
  params: {
    type: string;
  }
}

const ViewCreateAccountUser: React.FC = ({ navigation }: any) => {
  const [user, setUser] = useState({} as IUserState);
  const router = useRoute<IRouter>();
  const type = router?.params?.type;
  
  const handleSaveUser = async() => {
    if(type === 'psicologo'){
      try{
        const response = await api.post('usuarios/psicologo', user);
        console.log('Response ->', response.data);
        Alert.alert('Cadastrado com sucesso!😁');
        return navigation.navigate('ViewLogin')
      }catch(err: any){
        console.log('Err ->', err);
        console.log('Err Data->', err?.response?.data);
        return Alert.alert('Houve um erro inesperado!😰');
      }
    } else {
      try{
        const response = await api.post('usuarios/paciente', { ...user, valor: 0});
        console.log('Response ->', response.data);
        Alert.alert('Cadastrado com sucesso!😁');
        return navigation.navigate('ViewLogin');
      }catch(err: any){
        console.log('Err ->', err);
        console.log('Err Data->', err?.response?.data);
        return Alert.alert('Houve um erro inesperado!😰')
      }
    }
  }

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
          value={user.nome}
           onChangeText={
             (text) => setUser({
               ...user,
               nome: text
             })
           }
          placeholder="Digite seu Nome"
        />
        <Inputs 
          value={user.cpf}
          onChangeText={
            (text) => setUser({
              ...user,
              cpf: text
            })
          }
          placeholder="Digite seu Cpf"
        />
        {type === 'psicologo' && 
          <Inputs
          value={user.crp}
          onChangeText={
            (text) => setUser({
              ...user,
              crp: text
            })
          } 
          placeholder="Digite seu CRP"
        />}
        <Inputs 
          value={user.senha}
          onChangeText={
            (text) => setUser({
              ...user,
              senha: text
            })
          } 
          placeholder="Digite sua Senha"
        />
        <Inputs
          value={user.estado}
          onChangeText={
            (text) => setUser({
              ...user,
              estado: text
            })
          }  
          placeholder="Digite seu Estado"
        />
        <Inputs
          value={user.cidade}
          onChangeText={
            (text) => setUser({
              ...user,
              cidade: text
            })
          }  
          placeholder="Digite seu Cidade"
        />
        {type === 'psicologo' && 
          <Inputs
            value={user.sobreMim}
            onChangeText={
              (text) => setUser({
                ...user,
                sobreMim: text
              })
            }  
            placeholder="Digite Sobre Mim"
        />}
        {type === 'psicologo' && 
          <Inputs
            value={user.valor}
            onChangeText={
              (text) => setUser({
                ...user,
                valor: text
              })
            } 
            placeholder="Digite o Valor da Consulta"
        />}
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          onPress={handleSaveUser} 
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

export default ViewCreateAccountUser;