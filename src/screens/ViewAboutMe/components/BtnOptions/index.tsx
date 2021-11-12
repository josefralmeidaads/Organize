import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';

import { styles } from './styles';

const BtnOptions: React.FC<ButtonProps> = ({...props}: ButtonProps) => {
  return (
    <Button 
      {...props}
      containerStyle={styles.container}
      buttonStyle={props.title !== 'Sair' ? styles.button : styles.button_logout}
      titleStyle={props.title !== 'Sair' ? styles.text : styles.text_logout}
    />
  );
}

export default BtnOptions;