import React from "react";
import styles from './Card.style';
import { View,Text,Image } from "react-native";

// <Image style={styles.image} source={{uri:products.imgURL}}/>
const Card=({products})=>{
    return(

        <View style={styles.container}>


                <View>
                    <Image style={styles.image} source={{uri: products.imgURL}} />
                </View>

                <View>
                    <Text style={styles.title}>{products.title}</Text>
                    <Text style={styles.price}>{products.price}</Text>
                    <Text style={styles.inStock} >{products.inStock ? "" : "STOKTA YOK"}</Text>
                </View>


        </View>

       
    );
}


export default Card;