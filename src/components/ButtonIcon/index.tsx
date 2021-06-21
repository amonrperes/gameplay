import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = {
  title: string;
}

const ButtonIcon = ({ title } : Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
  
}

export default ButtonIcon;