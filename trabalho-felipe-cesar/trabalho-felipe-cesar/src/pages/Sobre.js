import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

const sobre = [
{
  uid: 1,
  sobre: 'O Curiosidades sobre Figuras Históricas é um espaço digital idealizado e desenvolvido por Felipe Cesar, com o propósito de resgatar e compartilhar a biografia, os fatos marcantes e as peculiaridades dos personagens mais influentes que já passaram pelo nosso planeta. Mais do que um simples repositório de dados, a plataforma nasceu do desejo de humanizar os grandes nomes dos livros didáticos, revelando os hábitos, os segredos e as excentricidades de líderes, cientistas, artistas e revolucionários.',
},
];


export default function Sobre() {
  return (
    
    <View style={styles.container}>
      <FlatList
        data={sobre}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
          }
            <Image source={item.imagem} style={styles.imagem} />
            <ScrollView style={styles.info}>
              <Text style={styles.sobre}>{item.sobre}</Text>
          
            </ScrollView>
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
  sobre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d3a007',
  },
});





