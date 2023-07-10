import React from 'react';
import { View,FlatList,Text,StyleSheet,TextInput,Dimensions } from 'react-native';
import products from './data/data.json'
import Card from './components/card/Card';

const App=()=>{
  return(


<View style={styles.container}>


      <Text style={styles.title} >PATİKA STORE</Text>
      <TextInput placeholder='Ara' style={styles.search}></TextInput>

    <FlatList 
     keyExtractor={item=>item.id.toString()}
        data={products}
        renderItem={RenderData}
        numColumns={2}
      />




    
    </View>


  );
}

const styles =StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'purple',
  },
  search:{
    margin:5,
    height:40,
    borderRadius:10,
    backgroundColor:'#eceff1'
  }
})
const RenderData=({item})=><Card products={item}></Card>
export default App;
