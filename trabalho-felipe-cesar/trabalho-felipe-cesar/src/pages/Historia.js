import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';

const historia = [
  {
    uid: '1',
    historia: 'Albert Einstein nasceu na cidade de Ulm, na Alemanha, no dia 14 de março de 1879. Filho de Hermann Einstein e Pauline Einstein, mudou-se ainda pequeno com a família para Munique. Na infância, não era visto como um prodígio precoce, mas já demonstrava grande curiosidade pela ciência, fascinando-se por uma bússola que ganhou aos cinco anos e aprendendo a tocar violino, paixão que o acompanhou por toda a vida. Teve uma trajetória escolar marcada por questionamentos ao sistema educacional tradicional, chegando a se desentender com métodos rígidos de ensino, embora se destacasse muito cedo em matemática e física.',
  
  },
   {
    uid: '2',
    historia: 'Isaac Newton foi um dos cientistas mais influentes da história da humanidade, nascido na Inglaterra em 1643. Durante sua juventude na Universidade de Cambridge, ele teve que se isolar no campo devido à Grande Peste de Londres, período extremamente produtivo no qual formulou suas teorias mais revolucionárias. Ele unificou a física terrena e a celeste ao estabelecer as três leis do movimento e a lei da gravitação universal, explicando desde a queda de uma maçã até a órbita dos planetas. Além de revolucionar a física, Newton desenvolveu o cálculo matemático infinitesimal simultaneamente a Leibniz e realizou descobertas fundamentais na óptica, provando que a luz branca é composta pelas cores do arco-íris ao fazê-la passar por um prisma. Mestre da Casa da Moeda e presidente da renomada Royal Society, ele dedicou seus últimos anos também à alquimia e à teologia, falecendo em 1727 e deixando um legado que transformou para sempre a nossa compreensão do universo.',
   
  },
  {
    uid: '3',
    historia: 'Leonardo da Vinci nasceu na localidade de Anchiano, perto de Vinci, na Itália, em 15 de abril de 1452. Filho ilegítimo de um tabelião, ele não teve uma educação formal avançada na infância, mas demonstrou enorme curiosidade e talento artístico desde cedo. Na adolescência, mudou-se para Florença e entrou como aprendiz no famoso ateliê de Andrea del Verrocchio, onde aprendeu pintura, escultura e técnicas mecânicas',
  
  },
  {
    uid: '4',
    historia: 'John Fitzgerald Kennedy foi o 35º presidente dos Estados Unidos e uma das figuras mais marcantes do século XX. Nascido em uma influente e rica família de Massachusetts, ele superou sérios problemas de saúde na juventude para se tornar um herói de guerra na Marinha durante a Segunda Guerra Mundial. Essa reputação militar, somada ao forte apoio familiar, pavimentou seu caminho para a política, onde serviu como deputado e senador pelo Partido Democrata antes de vencer a histórica e acirrada eleição presidencial de 1960 contra Richard Nixon.',
    
  },
  {
    uid: '5',
    historia: 'Pelé, o maior jogador de futebol de todos os tempos, nasceu em Três Corações, Minas Gerais, e iniciou sua carreira profissional no Santos Futebol Clube com apenas 15 anos, clube que defendeu por quase duas décadas e onde conquistou duas Copas Libertadores e dois Mundiais de Clubes. Sua consagração mundial aconteceu na Copa do Mundo de 1958 na Suécia, quando, aos 17 anos, tornou-se o jogador mais jovem a vencer o torneio, marcando gols decisivos que encantaram o planeta. Ele repetiu o triunfo nas Copas de 1962 no Chile e de 1970 no México, esta última liderando o que muitos consideram a maior seleção de todos os tempos.',
  },
  {
    uid:'6',
    historia:'Nikola Tesla foi um dos maiores inventores e engenheiros eletricistas da história, nascido em 1856 na atual Croácia e conhecido por revolucionar o mundo com suas descobertas sobre a eletricidade. Ele emigrou para os Estados Unidos em 1884, onde trabalhou brevemente com Thomas Edison antes de se tornar seu rival na famosa "Guerra das Correntes", na qual Tesla defendeu o uso da corrente alternada (CA) contra a corrente contínua (CC) de Edison. Com o apoio financeiro de George Westinghouse, o sistema de corrente alternada de Tesla provou ser muito mais eficiente para transmitir energia a longas distâncias, tornando-se o padrão mundial que utilizamos até hoje.',
  },
];

export default function Historia() {
  return (
    
    <View style={styles.container}>
      <FlatList
        data={historia}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
          }
            <Image source={item.imagem} style={styles.imagem} />
            <ScrollView style={styles.info}>
              <Text style={styles.historia}>{item.historia}</Text>
          
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
  historia: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d3a007',
  },
});


