import React from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { styles } from './styles';
import Logo from '../../../../assets/Component1.svg';
import avatar from '../../../../assets/psicologo2.png';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { IUserLogged } from '../../../../store/modules/userLogged/types';
import api from '../../../../services/api';

const NavHeader: React.FC = () => {
  const userLogged = useSelector<IState, IUserLogged>(state => state.userLogged);
  const imagePickerCallback = async() => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      quality: 1,
    });
    const imagem = result?.assets[0];
    await uploadImage(imagem);
  }

  const uploadImage = async(imagem: any) => {
    const data = new FormData();
    data.append('imagem', imagem)
    console.log('Data ->', data);
    if(userLogged.paciente !== null){
      try{
        const response = await api.post(`imagem/paciente/${userLogged.id}`, data);
        return Alert.alert('Sucesso', "Imagem Cadastrada Com Sucesso")
      }catch(err){
        console.log('Err ->', err)
        console.log('ErrMsg ->', err.response.data)
        return Alert.alert('Error');
      }
    }else {
      try{
        const response = await api.post(`imagem/psicologo/${userLogged.id}`, data);
        return Alert.alert('Sucesso', "Imagem Cadastrada Com Sucesso")
      }catch(err){
        console.log('Err ->', err)
        console.log('ErrMsg ->', err.response.data)
        return Alert.alert('Error');
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={imagePickerCallback} 
      >
        <Image source={avatar} style={styles.avatar}/>
      </TouchableOpacity>
      <Logo style={styles.logo} width={80} height={80}/>
    </View>
  );
}

export default NavHeader;