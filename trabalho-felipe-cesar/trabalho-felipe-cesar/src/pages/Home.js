function HomeScreen({ navigation }) {
  return (
   
    <ScrollView>
      <ScrollView
        title="FigurasHistoricas"
        onPress={() => navigation.navigate('FigurasHistoricas')}
      />

      <ScrollView
        title="Historia"
        onPress={() => navigation.navigate('Historia')}
      />

      <ScrollView
       title="Sobre"
       onPress={() => navigation.navigate('Sobre')}
       />
    </ScrollView>


  );
}
 
