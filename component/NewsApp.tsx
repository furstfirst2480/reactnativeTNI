import { StyleSheet, Text, View ,FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";

    interface User {
        title: string;
        description: string;
        publishedAt: string; //local:new Date(item.publishedAt).toLocaleDateString()
        url: string

      }
      const NewsApp = () => {
    
        const [data, setData] = useState<User[]>([]);
        const [loading, setLoading] = useState(true);
       
        useEffect(() => {
            const API_KEY = 'f3db71ee8b334d06854c3a8389d6de71';
            const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f3db71ee8b334d06854c3a8389d6de71";
          fetch(URL)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData.articles); // Ensure that the array is properly set
                setLoading(false);
              })
            .catch((error) => {
              console.error(error);
              setLoading(false);
            });
        }, []);
      
        //function _renderItem for using in Flatlist
         const _renderItem = ({item}: {item:User})=>(
              <TouchableOpacity style={styles.item}>
                  <Text style={styles.name}>{item.title}</Text>
                  <Text style={styles.email}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
                  <Text>{item.description}</Text>
              </TouchableOpacity> 
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
                keyExtractor={(item)=>item.url} // กำหนด key สำหรับ item
              />
            )}
          </View>
          
        );
      };
      
      export default NewsApp;
      
      const styles = StyleSheet.create({
        container: {
          justifyContent: "center",
          paddingTop: 50,
         
        },
        item: {
          backgroundColor: "yellow",
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
      