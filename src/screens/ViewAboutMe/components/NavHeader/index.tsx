import React from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

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
    const formData = new FormData();
    const result = await ImagePicker.openPicker({});
    let photo = { uri: result.path};
    
    formData.append('file', { uri: photo.uri })
    
    try {
      const { data } = await api.post(`imagem/paciente/${userLogged.paciente?.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }catch(err){
      console.log('Err ->', err);
      console.log('ErrMsg ->', err?.response?.data);
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