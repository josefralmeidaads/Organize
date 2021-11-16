import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { BottomSheet } from 'react-native-elements';

import { styles } from './styles';
import avatar from '../../assets/avatar_no_image.png';
import { Button } from 'react-native-elements';
import { IPsicologo } from '../../store/modules/userLogged/types';
import ScheludeOptions from './components/ScheludeOptions';

interface IPsicologoItem {
  psicologo: {
    psicologo: IPsicologo;
  }
}

const CardPsicologist: React.FC<IPsicologoItem> = ({ psicologo }: IPsicologoItem) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [id, setId] = useState(0);
  
  const handleToScheduleAppointment = (id: number) => {
    setId(id);
    setVisible(true);
  }

  const handleRecordSchedule = (visible) => {
    setVisible(visible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        { psicologo.psicologo.imagem !== null ? <Image source={{ uri: (psicologo.psicologo.imagem) }} style={styles.avatar}/>
        : <Image source={avatar} style={styles.avatar}/>}
        <View style={styles.info_psicologist}>
          <Text style={styles.psico_name}>
            {psicologo.psicologo.nome}
          </Text>
          <Text style={styles.psico_price}>
            R${psicologo.psicologo.valor}
          </Text>
          <Text style={styles.psico_crp}>
            CRP: {psicologo.psicologo.crp}
          </Text>
          <View style={styles.psico_adress}>
            <Text style={styles.psico_adress_text}>
              {psicologo.psicologo.cidade} | {psicologo.psicologo.estado}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.experience}>
        <Text style={styles.experience_title}>
          Especialidade:
        </Text>
        <Text style={styles.experience_text}>
          {psicologo.psicologo.sobreMim}
        </Text>
      </View>
      <Button
        onPress={() => handleToScheduleAppointment(psicologo.psicologo.id)}
        titleStyle={styles.button_text}
        buttonStyle={styles.button}
        containerStyle={styles.button_container}
        title="Agendar"
      />

      <BottomSheet 
        isVisible={visible}
        containerStyle={{
          backgroundColor: 'rgba(0,0,0,0.25)'
        }}
      >
        <ScheludeOptions id={id} onPress={handleRecordSchedule}/>
      </BottomSheet>
    </View>
  );
}

export default CardPsicologist;