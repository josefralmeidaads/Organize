import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/foto.png';
import { Button } from 'react-native-elements';

const CardSession: React.FC = () => {
  return (
    <Button 
      icon={
        <Image source={avatar}/>
      }
      iconPosition="left"
      buttonStyle={styles.container}
      title={
      <>  
        <Text style={styles.name}>Ricardo Silva</Text>
        <Text style={styles.hour}>Horário{'\n'}16:30</Text>
      </>
      }
    />
  );
}

export default CardSession;