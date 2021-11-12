import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Logo from '../../../../assets/Component1.svg';
import avatar from '../../../../assets/psicologo2.png';

const NavHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8} 
      >
        <Image source={avatar} style={styles.avatar}/>
      </TouchableOpacity>
      <Logo style={styles.logo} width={80} height={80}/>
    </View>
  );
}

export default NavHeader;