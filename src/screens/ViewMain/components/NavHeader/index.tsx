import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../../../assets/Component1.svg';

const NavHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Todos os profissionais
      </Text>
      <Logo style={styles.logo} width={80} height={80}/>
    </View>
  );
}

export default NavHeader;