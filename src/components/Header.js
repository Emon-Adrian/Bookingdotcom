import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return (
        <View style={{ backgroundColor: '#003580', height: 65, flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
          <Pressable style={{flexDirection:"row",alignItems:"center", borderWidth:2, borderColor:"white", borderRadius:25, padding:8}}>
          <FontAwesome name="bed" size={26} color="white" />
            <Text style={{color:'white', marginLeft:4}}>Stays</Text>
          </Pressable>
          <Pressable style={{flexDirection:"row",alignItems:"center",borderRadius:25, padding:8}}>
          <FontAwesome name="plane" size={26} color="white" />
            <Text style={{color:'white', marginLeft:4}}>Flights</Text>
          </Pressable>
          <Pressable style={{flexDirection:"row",alignItems:"center", borderRadius:25, padding:8}}>
          <FontAwesome name="car" size={26} color="white" />
            <Text style={{color:'white', marginLeft:4}}>Car Rental</Text>
          </Pressable>
          <Pressable style={{flexDirection:"row",alignItems:"center",borderRadius:25, padding:8}}>
          <FontAwesome name="taxi" size={26} color="white" />
            <Text style={{color:'white', marginLeft:4}}>Taxi</Text>
          </Pressable>
        </View>
    )
}

export default Header