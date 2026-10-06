import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

const figuras = [
  {
     uid: 1,
    nome: 'Albert Einstein',
    descricao: '"A imaginação é mais importante que o conhecimento".',
    imagem: require('../../assets/Einstein.jpg.jpg'),
   
  },
  {
    uid: 2,
    nome: 'Isaac Newton',
    descricao:'"Se vi mais longe, foi por estar sobre ombros de gigantes".',
    imagem: require('../../assets/Newton.jpg.jpg'),
    
  },
  {
    uid: 3,
    nome: 'Leonardo Da Vinci',
    descricao:'"Aprender nunca esgota a mente".',
    imagem: require('../../assets/Davinci.jpg.jpg'),
   
  },
  {
    uid: 4,
    nome: 'John F Kennedy',
    descricao:' "Não pergunte o que seu país pode fazer por você; pergunte o que você pode fazer pelo seu país".',
    imagem: require('../../assets/JohnKennedy.jpg'),
   
  },
  {
     uid: 5,
    nome: 'Pele',
    descricao:'"O sucesso não acontece por acaso. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que você está fazendo."',
    imagem: require('../../assets/pele.jpg'),
  },
  {
     uid: 6,
    nome: 'Nikola Tesla',
    descricao:'"Se você quiser encontrar os segredos do universo, pense em termos de energia, frequência e vibração."',
    imagem: require('../../assets/tesla.jpg'),
  },
];

export default function FigurasHistoricas() {
  return (
   
    <View style={styles.container}>
      <FlatList
        data={figuras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            }
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
          
            </View>
          </View>
        )}
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  nome: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#d3a007',
  },
});



 