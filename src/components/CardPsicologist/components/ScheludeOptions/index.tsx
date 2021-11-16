import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import moment from 'moment';
import DatePicker from '@react-native-community/datetimepicker';
import { ButtonProps, Button, Text, Icon } from 'react-native-elements';

import { styles } from './styles';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { IUserLogged } from '../../../../store/modules/userLogged/types';
import api from '../../../../services/api';

interface ButtonProperty extends ButtonProps{
  id?: number;
}

const ScheludeOptions: React.FC<ButtonProperty> = ({ id, onPress }: ButtonProperty) => {
  const user = useSelector<IState, IUserLogged>(state => state.userLogged);
  const [psico_id, setPsico_id] = useState<number>(id);
  const [ date, setDate ] = useState<Date>(new Date());  
  const [ dateStr, setDateStr ] = useState<string>('');  
  const [ time, setTime ] = useState<Date>(new Date());  
  const [ timeStr, setTimeStr ] = useState<string>('');  
  const [ showDate, setShowDate] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('date');

  const handleShowDatePicker = () => {
    setMode('date');
    setShowDate(true);
  }

  const handleShowDateTimePicker = () => {
    setMode('time');
    setShowDate(true);
  }

  const setDateTimeStr = (selectedDate: Date) => {
    setDateStr(moment(selectedDate).format('DD/MM/YYYY'));
    setTimeStr(moment(selectedDate).format('HH:mm'));
  }

  const onChangeDate = (event: any, selectedDate: any) => {
    setShowDate(false);
    setDate(selectedDate);
    setDateTimeStr(selectedDate);
  }

 
  console.log('date ->', dateStr, '\n time ->', timeStr);

  const handleToScheduleAppointments = async() => {
    try{
      const response = await api.post('agendamento/paciente', {
        paciente_id: user?.paciente?.id,
        psicologo_id: psico_id,
        data: dateStr,
        hora: timeStr,
      })
      return Alert.alert('Sucesso', 'Consulta registrada!')
    }catch(err){
      return Alert.alert('Error', err.response.data || err);
    }finally{
      onPress(false);
    }
  }
 

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Selecione a data e horário do agendamento!.</Text>
      {showDate && <DatePicker
        value={date}
        date={date}
        mode={mode}
        onChange={onChangeDate}
      />}
      <Button
        onPress={handleShowDatePicker} 
        containerStyle={styles.button_container_schedule}
        buttonStyle={styles.button_schedule}
        titleStyle={styles.button_text_schedule}
        icon={
          <Icon 
            type="font-awesome-5"
            name="calendar"
          />
        }
        title="Agenda Data"
      />
      <Button
        onPress={handleShowDateTimePicker} 
        containerStyle={styles.button_container_schedule}
        buttonStyle={styles.button_schedule}
        titleStyle={styles.button_text_schedule}
        icon={
          <Icon 
            type="font-awesome-5"
            name="clock"
          />
        }
        title="Agenda Horário"
      />

      <Button
        onPress={handleToScheduleAppointments} 
        titleStyle={styles.button_text}
        containerStyle={styles.button_container}
        buttonStyle={styles.button}
        title="Agendar"
      />
    </View>
  );
}

export default ScheludeOptions;