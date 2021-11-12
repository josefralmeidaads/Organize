import React from 'react';
import { View } from 'react-native';
import BtnOptions from './components/BtnOptions';
import NavHeader from './components/NavHeader';

import { styles } from './styles';

const ViewAboutMe: React.FC = ({ navigation }: any) => {
  const handleMoveToViewAboutMeinfo = () => {
    navigation.navigate('ViewAboutMeInfo')
  }

  return (
    <View style={styles.container}>
      <NavHeader />
      <View style={styles.options}>
        <BtnOptions title="Sobre Mim" onPress={handleMoveToViewAboutMeinfo}/>
        <BtnOptions title="Meu Trabalho"/>
        <BtnOptions 
          title="Sair"
        />
      </View>
    </View>
  );
}

export default ViewAboutMe;