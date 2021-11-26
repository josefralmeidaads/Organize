import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/avatar_no_image.png';
import { Button } from 'react-native-elements';
import { ISession } from './types';
import { useSelector } from 'react-redux';
import { IState } from '../../store';

const CardSession: React.FC<ISession> = ({ data, hora, paciente, psicologo }: ISession) => {
  const userLogged = useSelector<IState, ISession>(state => state.userLogged);
  return (
    <Button 
      icon={
        userLogged.psicologo !== null 
          ? 
          <Image source={userLogged.psicologo === null ? avatar : {uri: `${userLogged?.psicologo?.imagem}`}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
          }}
        />
        :
        <Image source={userLogged.paciente === null ? avatar : {uri: `${userLogged?.paciente?.imagem}`}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
          }}
        />
      }
      iconPosition="left"
      buttonStyle={styles.container}
      title={
      <>  
        {userLogged.psicologo !== null && <Text style={styles.name}>{paciente.nome}</Text>}
        {userLogged.paciente !== null && <Text style={styles.name}>{psicologo.nome}</Text>}
        <Text style={styles.hour}>Horário{'\n'}{hora}</Text>
      </>
      }
    />
  );
}

export default CardSession;