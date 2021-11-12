import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/psicologo2.png';
import { Button } from 'react-native-elements';

const CardPsicologist: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar}/>
        <View style={styles.info_psicologist}>
          <Text style={styles.psico_name}>
            Larissa Maria Toledo Alves
          </Text>
          <Text style={styles.psico_price}>
            R$90
          </Text>
          <Text style={styles.psico_crp}>
            CRP: 04/39973
          </Text>
          <View style={styles.psico_adress}>
            <Text style={styles.psico_adress_text}>
              Ubá | Minas Gerais
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.experience}>
        <Text style={styles.experience_title}>
          Especialidade:
        </Text>
        <Text style={styles.experience_text}>
          Estresse, Ansiedade, Autoconhecimento, Relacionamentos/Família,
          Depressão, Doenças Emocionais, Doenças Mentais,
          Traumas e Abusos, Transtorno de Personalidade.
        </Text>
      </View>
      <Button
        titleStyle={styles.button_text}
        buttonStyle={styles.button}
        containerStyle={styles.button_container} 
        title="Agendar"
      />
    </View>
  );
}

export default CardPsicologist;