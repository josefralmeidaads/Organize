import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/foto.png';
import { Button } from 'react-native-elements';
import { ISession } from './types';
import { useSelector } from 'react-redux';
import { IState } from '../../store';

const CardSession: React.FC<ISession> = ({ data, hora, paciente, psicologo }: ISession) => {
  const userLogged = useSelector<IState, ISession>(state => state.userLogged);
  return (
    <Button 
      icon={
        <Image source={avatar}/>
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