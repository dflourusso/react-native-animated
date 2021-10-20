import * as React from "react";
import { Image, StyleSheet } from "react-native";

import Animated, { 
  useSharedValue, 
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolate 
} from 'react-native-reanimated';

import { Text, View } from "../components/Themed";

const product = {
  description: 'Notebook Acer Aspire 3 Melhor desempenho para executar suas tarefas! Com processador AMD Ryzen"" 7 Quad Core, o Aspire 3 executa as mais diversas tarefas com melhor desempenho e velocidade. Seu desempenho gráfico é impressionante e adequado às principais necessidades em vídeos e imagens. Com armazenamento de 256GB SSD, você armazena uma grande quantidade de dados em documentos, vídeos, imagens, músicas emuito mais. Além disso, o slot M.2 ocupado pelo SSD, permite uma forma simples de instalar e alterar a unidade de armazenamento SSD sem a necessidade de remoção do seu disco rígido para velocidades de leitura e gravação incríveis de seus arquivos. PRONTO PARA QUALQUER DESAFIO Desenvolvido para não deixar você parar, o Aspire 3 conta com uma moderna placa de vídeo (GPU) AMD Radeon com memória dedicada VRAM com 2 GB GDDRS, além de teclado em português do Brasil padrão ABNT 2 com teclado numérico dedicado. Você encontra seu notebook aqui no KaBuM!'
}

const IMAGE_HEIGHT = 180;

export default function HeaderScrollScreen() {

  const scrollY = useSharedValue(0);

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 80, 180], [IMAGE_HEIGHT, IMAGE_HEIGHT / 2, 0], Extrapolate.CLAMP)
  }))
  
  const sliderAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP)
  }));

  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });  

  return (
    <View style={styles.container}>
      <Animated.View style={[headerAnimatedStyle, sliderAnimatedStyle, styles.headerContainer]}>        
          <Image style={{ height: IMAGE_HEIGHT, width: 180 }} source={require('../assets/images/product.png')} />
      </Animated.View>
      
      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
      >        
        <View style={styles.infoGroup}>
          <Text style={styles.label}>Características</Text>
          <Text style={styles.text}> - Marca: Acer</Text>
          <Text style={styles.text}> - Modelo: A315-23-R3L9</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>CPU</Text>
          <Text style={styles.text}> - AMD Ryzen 7-3700U</Text>
          <Text style={styles.text}> - Quad core</Text>
          <Text style={styles.text}> - Frequência 2.30GHz até 4.00 GHz</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Memória RAM</Text>
          <Text style={styles.text}> - Capacidade: 8GB (4GB Soldada + 4GB Módulo)</Text>
          <Text style={styles.text}> - Tipo: DDR4</Text>
          <Text style={styles.text}> - Clock: 2400MHz</Text>
          <Text style={styles.text}> - Expansível até 20GB</Text>
        </View>   

        <View style={styles.descriptionLabelContainer}>
          <Text style={styles.descriptionLabel}>Descrição do produto</Text>
        </View>
        <Text style={styles.description}>
          {product.description} 
        </Text>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContentContainer: {
    paddingHorizontal: 16, 
    paddingTop: IMAGE_HEIGHT,
  },
  infoGroup: {
    paddingBottom: 12, 
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#383545',
  },
  text: {
    fontSize: 16,
    color: '#383545',
  },
  descriptionLabelContainer: {
    marginBottom: 24,
  },
  descriptionLabel: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#121516',
  },
  description: {
    fontSize: 18,
    color: '#5c6b70',
  },
});
