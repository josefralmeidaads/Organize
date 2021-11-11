import React from 'react';
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

const ViewCreateAccountUser: React.FC = ({ navigation }: any) => {
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
          placeholder="Digite seu Nome"
        />
        <Inputs 
          placeholder="Digite seu Cpf"
        />
        {type === 'psicologo' && 
          <Inputs 
          placeholder="Digite seu CRP"
        />}
        <Inputs 
          placeholder="Digite sua Senha"
        />
        <Inputs 
          placeholder="Digite seu Estado"
        />
        <Inputs 
          placeholder="Digite seu Cidade"
        />
        <Inputs 
          placeholder="Digite seu Número"
        />
        <Inputs 
          placeholder="Digite seu Bairro"
        />
        <Inputs 
          placeholder="Digite seu Cep"
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

export default ViewCreateAccountUser;