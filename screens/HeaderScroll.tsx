import * as React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

const product = {
  description: 'Notebook Acer Aspire 3 Melhor desempenho para executar suas tarefas! Com processador AMD Ryzen"" 7 Quad Core, o Aspire 3 executa as mais diversas tarefas com melhor desempenho e velocidade. Seu desempenho gráfico é impressionante e adequado às principais necessidades em vídeos e imagens. Com armazenamento de 256GB SSD, você armazena uma grande quantidade de dados em documentos, vídeos, imagens, músicas emuito mais. Além disso, o slot M.2 ocupado pelo SSD, permite uma forma simples de instalar e alterar a unidade de armazenamento SSD sem a necessidade de remoção do seu disco rígido para velocidades de leitura e gravação incríveis de seus arquivos. PRONTO PARA QUALQUER DESAFIO Desenvolvido para não deixar você parar, o Aspire 3 conta com uma moderna placa de vídeo (GPU) AMD Radeon com memória dedicada VRAM com 2 GB GDDRS, além de teclado em português do Brasil padrão ABNT 2 com teclado numérico dedicado. Você encontra seu notebook aqui no KaBuM!'
}

export default function HeaderScrollScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={{ height: 180, width: 180 }} source={require('../assets/images/product.png')} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerContainer: {
    alignItems: 'center',
  },
  scrollViewContentContainer: {
    paddingHorizontal: 16, 
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
