import { View, Text, ScrollView, Pressable, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation, useRoute} from '@react-navigation/native'
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import RBSheet from "react-native-raw-bottom-sheet";

const Home = () => {

  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [selectedDates, setSelectedDates] = useState()
  const route = useRoute()
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
      },
      headerRight: () => {
        <FontAwesome name="bell" size={20} color='white' style={{ marginRight: 12 }} />
      }
    })
  })

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: '80%', marginHorizontal: "3%" },
          text: { fontSize: 20 }
        }}
        primary
        title="Submit"
      />
    )
  }
  console.log(route.params)

  return (
    <View>
      <Header />
      <ScrollView>
        <View style={{ margin: 20, borderColor: "#ffc72c", borderWidth: 3, borderRadius: 6 }}>
          {/* Destination */}
          <TouchableOpacity
          onPress={()=>navigation.navigate("Search")}
           style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <FontAwesome name="search" size={20} color='black' style={{ marginRight: 12 }} />
            <TextInput placeholder={route?.params ? route.params.input : "Enter your Destination"} />
          </TouchableOpacity>
          {/* Selected Dates */}
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <FontAwesome name="calendar" size={20} color='black' style={{ marginRight: 12 }} />
            <DatePicker
              style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0, borderColor: 'transparent' }}
              customStyles={{
                placeholderText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto" },
                headerStyle: {
                  backgroundColor: "#0047AB"
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center", marginRight: "auto"
                }
              }} // optional 
              selectedBgColor="#0047AB"// optional text will align center or not
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
              allowFontScaling={false} // optional
              placeholder={'Apr 27, 2018 → Jul 10, 2018'}
              placeholderTextColor="black"
              mode={'range'}
            />
          </Pressable>
          {/* Rooms and Guest */}
          <Pressable onPress={() => refRBSheet.current.open()} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <FontAwesome name="user" size={20} color='black' style={{ marginRight: 12 }} />
            <TextInput placeholder={`${rooms} room + ${adults} adults + ${children} children` }
            placeholderTextColor="red" 
            />
          </Pressable>
          {/* Search Button */}
          <Pressable style={{ paddingHorizontal: 10, backgroundColor: '#2a52be', borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: 'white' }}>Search</Text>
          </Pressable>
        </View>
        <Text style={{marginHorizontal:20, fontSize:17, fontWeight:"500"}}>Travel more spend less</Text>
        <ScrollView>
         <Pressable style={{width:200, height:150, marginTop:10, backgroundColor:'#2a52be', borderRadius:10, paddingHorizontal:10}}>
           <Text>Genius</Text>
           <Text>Your at the genius royality</Text>
         </Pressable>
        </ScrollView>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={350}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
          <View style={{ width: "100%", height: 310, padding: 10 }}>
          <Text style={{textAlign:"center", fontSize:15, fontWeight:'bold'}}>Select rooms and guests</Text>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginVertical:15,
            }}>
              <Text style={{fontSize:15, fontWeight:"600",}}>Rooms</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>setRooms(Math.max(1, rooms - 1))}
                 style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginRight:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>-</Text>
                </TouchableOpacity>
                <Text>{rooms}</Text>
                <TouchableOpacity
                onPress={()=> setRooms((c)=> c +1)}
                style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginLeft:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginVertical:15,
            }}>
              <Text style={{fontSize:15, fontWeight:"600",}}>Adults</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>setAdults(Math.max(1, adults - 1))}
                 style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginRight:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>-</Text>
                </TouchableOpacity>
                <Text>{adults}</Text>
                <TouchableOpacity
                onPress={()=> setAdults((c)=> c +1)}
                style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginLeft:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginVertical:15,
            }}>
              <Text style={{fontSize:15, fontWeight:"600",}}>children</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>setChildren(Math.max(0, children - 1))}
                 style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginRight:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>-</Text>
                </TouchableOpacity>
                <Text>{children}</Text>
                <TouchableOpacity
                onPress={()=> setChildren((c)=> c +1)}
                style={{
                  width:26,
                  height:26,
                  borderRadius:13,
                  borderColor:"#bebebe",
                  backgroundColor:"#e0e0e0",
                  marginLeft:10,
                 }}
                >
                  <Text style={{textAlign:"center", fontSize:20, fontWeight:"600", paddingHorizontal:6}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Pressable style={{ paddingHorizontal: 10, backgroundColor: '#2a52be',top:20, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: 'white' }}>Apply</Text>
          </Pressable>
          </View>
          
        </RBSheet>
      </ScrollView>
    </View>
  )
}

export default Home