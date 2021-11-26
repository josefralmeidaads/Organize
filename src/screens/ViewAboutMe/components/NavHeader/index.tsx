import React from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

import { styles } from './styles';
import Logo from '../../../../assets/Component1.svg';
import avatar from '../../../../assets/psicologo2.png';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { IUserLogged } from '../../../../store/modules/userLogged/types';
import api from '../../../../services/api';
import { addUserLogged } from '../../../../store/modules/userLogged/actions';

const NavHeader: React.FC = () => {
  const userLogged = useSelector<IState, IUserLogged>(state => state.userLogged);
  const dispatch = useDispatch();
  const imagePickerCallback = async() => {
    const result = await ImagePicker.openPicker({});
    const imagem = result;
    await uploadImage(imagem);
  }

  const uploadImage = async(imagem: ImageOrVideo) => {
    const data = new FormData();
    if(userLogged.paciente !== null){
      data.append('file', {
        name: `${imagem.filename}`,
        type: imagem.mime,
        uri: imagem.path,
      })

      try{
        const response = await api.post(`imagem/paciente/${userLogged.id}`, data);
        dispatch(addUserLogged(response.data));
        return Alert.alert('Sucesso', "Imagem Cadastrada Com Sucesso");
      }catch(err){
        console.log('Err ->', err)
        console.log('ErrMsg ->', err?.response?.data)
        return Alert.alert('Error');
      }
    }else {
      data.append('imagem', {
        name: `${imagem.filename}`,
        type: imagem.mime,
        uri: imagem.path,
      })
      try{
        const response = await api.post(`imagem/psicologo/${userLogged.id}`, data);
        dispatch(addUserLogged(response.data));
        return Alert.alert('Sucesso', "Imagem Cadastrada Com Sucesso")
      }catch(err){
        console.log('Err ->', err);
        console.log('ErrMsg ->', err?.response?.data)
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
        { userLogged?.paciente !== null ? 
          <Image source={userLogged?.paciente?.imagem !== null ? { uri: `${userLogged?.paciente?.imagem}` } : avatar} style={styles.avatar}/>
          :
          <Image source={userLogged?.psicologo?.imagem !== null ? { uri: `${userLogged?.psicologo?.imagem}` } : avatar} style={styles.avatar}/>
        }

      </TouchableOpacity>
      <Logo style={styles.logo} width={80} height={80}/>
    </View>
  );
}

export default NavHeader;