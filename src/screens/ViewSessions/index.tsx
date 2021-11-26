import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import avatar from '../../assets/avatar_no_image.png';
import CardSession from '../../components/CardSession';
import { IState } from '../../store';
import { IUserLogged } from '../../store/modules/userLogged/types';
import api from '../../services/api';
import { ISession } from '../../components/CardSession/types';

const ViewSessions: React.FC = () => {
  const userLogged = useSelector<IState, IUserLogged>(state => state.userLogged);
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  
  useEffect(() => {
    const loadDataPaciente = async() => {
      const response = await api.get(`agendamento/paciente/${userLogged?.paciente?.id}`);
      setSessions(response.data);
    }

    const loadDataPsiclogo = async() => {
      const response = await api.get(`agendamento/psicologo/${userLogged?.psicologo?.id}`);
      setSessions(response.data);
    }
    
    if(userLogged.paciente !== null){
      loadDataPaciente();
    }else {
      loadDataPsiclogo();
    }
  }, [])

  const _onRefresh = async() => {
    setRefreshing(true);
    const loadDataPaciente = async() => {
      const response = await api.get(`agendamento/paciente/${userLogged?.paciente?.id}`);
      setSessions(response.data);
      setRefreshing(true);
    }

    const loadDataPsiclogo = async() => {
      const response = await api.get(`agendamento/psicologo/${userLogged?.psicologo?.id}`);
      setSessions(response.data);
      setRefreshing(true);
    }
    
    if(userLogged.paciente !== null){
      loadDataPaciente();
    }else {
      loadDataPsiclogo();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>
          Olá {
            userLogged?.paciente?.nome ||
            userLogged?.psicologo?.nome
          }
        </Text>
        {(userLogged.paciente !== null) && (userLogged.paciente.imagem === null) && 
          <Image source={avatar} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}/>}

        {(userLogged.paciente !== null) && (userLogged.paciente.imagem !== null) && 
          <Image source={{ uri: userLogged.paciente.imagem }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}/>}

        {(userLogged.psicologo !== null) && (userLogged.psicologo.imagem === null) && 
          <Image source={avatar} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}/>}

        {(userLogged.psicologo !== null) && (userLogged.psicologo.imagem !== null) && 
          <Image source={{ uri: userLogged.psicologo.imagem }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}/>}

        

      </View>

      <View>
        <Text style={styles.title_pt_1}>
          Minhas
        </Text >
        <Text style={styles.title_pt_2}>
          Sessões
        </Text >
      </View>

      <FlatList 
        data={sessions}
        style={{
          marginTop: 20,
        }}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardSession 
            data={item.hora} 
            hora={item.hora}
            paciente={item.paciente}
            psicologo={item.psicologo}
          />
        )}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }
      />
    </View>
  );
}

export default ViewSessions;