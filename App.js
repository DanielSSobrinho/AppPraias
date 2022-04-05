import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Melhores Praias do Brasil</Text>
      <Text style={estilo.frase}>Venha Conhecer o Rio de Janeiro</Text>
      <ScrollView style={estilo.fotos}>
      <Image style={estilo.img} source= {require("./assets/praiarj2.jfif")}/>
      <Text style={estilo.legenda}>Copacabana</Text>
      <Image style={estilo.img} source= {require("./assets/praiarj.jfif")}/>
      <Text style={estilo.legenda}>Ipanema</Text>
      <Image style={estilo.img} source= {require("./assets/maldives-g7da2ff9fe_640.jpg")}/>
      <Text style={estilo.legenda}>Praia do Tietê</Text>
      <Image style={estilo.img} source= {require("./assets/beach-g7cb1fabf8_640.jpg")}/>
      <Text style={estilo.legenda}>Riacho Grande</Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#157F82'
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:50,
    marginBottom:20,
    fontWeight:'bold',
  },
  frase:{
    textAlign:'center',
    fontSize:18,
    marginBottom:20,
    fontFamily: 'Euphemia UCAS',
  },
  img:{
    width:350,
    height:250,
    borderRadius:5
  },
  legenda:{
    textAlign:'center',
    marginBottom:25,
    marginTop:5,
    fontFamily: 'Optima',
    fontSize:20,
  },
  fotos:{
    alignItems:'center',
  }
});







