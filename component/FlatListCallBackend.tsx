import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const FlatListCallBackend = () => {
  // กำหนด state สำหรับเก็บข้อมูลผู้ใช้และสถานะการโหลด
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  // กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ Component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //function _renderItem for using in Flatlist
   const _renderItem = ({item}: {item:User})=>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View> 
   )
  return (
    <View style={styles.container}>
      {loading ? ( // if loading info it's will show ActivityInidicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        // if info is loaded it will show Flatlist
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListCallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
   
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
