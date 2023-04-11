import { View, Text, ScrollView, Pressable, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import RBSheet from "react-native-raw-bottom-sheet";

const Home = () => {

  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [selectedDates, setSelectedDates] = useState()
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

  return (
    <View>
      <Header />
      <ScrollView>
        <View style={{ margin: 20, borderColor: "#ffc72c", borderWidth: 3, borderRadius: 6 }}>
          {/* Destination */}
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <FontAwesome name="search" size={20} color='black' style={{ marginRight: 12 }} />
            <TextInput placeholder='Enter your Destination' />
          </Pressable>
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
            <TextInput placeholder='1 room + 2 adults + 0 children' placeholderTextColor="red" />
          </Pressable>
          {/* Search Button */}
          <Pressable style={{ paddingHorizontal: 10, backgroundColor: '#2a52be', borderColor: '#ffc72c', borderWidth: 2, paddingVertical: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: 'white' }}>Search</Text>
          </Pressable>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={400}
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
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginVertical:15,
            }}>
              <Text>Rooms</Text>
              <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>{rooms}</Text>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>
      </ScrollView>
    </View>
  )
}

export default Home