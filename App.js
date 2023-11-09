import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data =

    [
        {"id": 1, first_name: "Marry", "last_name": "Sakura", "nickname": "Mar", "course": "Criminology", "year": 1},
        {"id": 2, "first_name": "Danny", "last_name": "Beans", "nickname": "Dan", "course": "Criminology", "year": 2},
        {"id": 3, "first_name": "Mitch", "last_name": "Goddes", "nickname": "Mitch", "course": "Criminology", "year": 3},
        {"id": 4, "first_name": "Sonny", "last_name": "Skers", "nickname": "Son", "course": "Criminology", "year": 4},
        {"id": 5, "first_name": "Dave", "last_name": "Robs", "nickname": "Dave", "course": "Criminology", "year": 5},
        {"id": 6, "first_name": "Clay", "last_name": "McCollinss", "nickname": "Clay", "course": "Criminology", "year": 6},
        {"id": 7, "first_name": "Hanna", "last_name": "Edward", "nickname": "Han", "course": "Criminology", "year": 7},
        {"id": 8, "first_name": "Shawn", "last_name": "Dush", "nickname": "San", "course": "BSIT", "year": 8},
        {"id": 9, "first_name": "Bob", "last_name": "Coffin", "nickname": "bob", "course": "BSIT", "year": 9},
             
        // Add more items here...
        {"id": 73, "first_name": "Ingrid", "last_name": "Dano", "nickname": "Ing", "course": "BSIT", "year": 73}
      
      
];


  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Text>{item.nickname}</Text>
    </TouchableOpacity>
  );
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Nicknames:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Text>Selected Item Information:</Text>
      <ScrollView>
        {selectedItem && (
          <View>
            <Text>First Name: {selectedItem.first_name}</Text>
            <Text>Last Name: {selectedItem.last_name}</Text>
            <Text>Nickname: {selectedItem.nickname}</Text>
            <Text>Course: {selectedItem.course}</Text>
            <Text>Year: {selectedItem.year}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default App;

