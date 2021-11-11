import React from 'react';
import { Input, InputProps } from 'react-native-elements';

import { styles } from './styles';

const Inputs: React.FC<InputProps> = ({...props}: InputProps) => {
  return (
    <Input 
      inputStyle={styles.input}
      containerStyle={styles.container}
      {...props}
    />
  );
}

export default Inputs;