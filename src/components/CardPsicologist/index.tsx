import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/psicologo2.png';
import { Button } from 'react-native-elements';
import { IPsicologo } from '../../store/modules/userLogged/types';


const CardPsicologist: React.FC = ({ psicologo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: (psicologo.psicologo.imagem) }} style={styles.avatar}/>
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
        titleStyle={styles.button_text}
        buttonStyle={styles.button}
        containerStyle={styles.button_container} 
        title="Agendar"
      />
    </View>
  );
}

export default CardPsicologist;