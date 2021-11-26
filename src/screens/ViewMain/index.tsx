import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useSelector } from 'react-redux';
import CardPsicologist from '../../components/CardPsicologist';
import api from '../../services/api';
import { IState } from '../../store';
import { IPsicologo, IUserLogged } from '../../store/modules/userLogged/types';
import NavHeader from './components/NavHeader';

import { styles } from './styles';

const ViewMain: React.FC = () => {
  const userLogged = useSelector<IState, IUserLogged>(state => state.userLogged)
  const [psicologists, setPsicologists] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  useEffect(() => {
    const loadData = async() => {
      const response = await api.get('usuarios/todos');
      const psicologos = response.data.filter(item => {
        if(item.psicologo !== null ){
          return item.psicologo
        }
      });
      setPsicologists(psicologos);
    }
    loadData();
  }, []);

  const _onRefresh = async() => {
    setRefreshing(true);
    const response = await api.get('usuarios/todos');
      const psicologos = response.data.filter(item => {
        if(item.psicologo !== null ){
          return item.psicologo
        }
      });
      setPsicologists(psicologos);
      setRefreshing(false);
  } 

  return (
    <View style={styles.container}>
      <NavHeader/>
      <FlatList
        data={psicologists}
        keyExtractor={(item) => String(item.id)} 
        renderItem={({ item }) => (
          <CardPsicologist psicologo={item}/>
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

export default ViewMain;