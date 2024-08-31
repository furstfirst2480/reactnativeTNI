import { StyleSheet, Text, View, Alert,Modal,Pressable, Button } from "react-native";
import React, {useState} from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBangkok from "./WeatherBangkok";

const WeatherApp = ():React.JSX.Element => {
    const [isModalVisible,setModalVisible] = useState(false);
    const [selectedCity,setSelectedCity] = useState('');

    const toggleModal = (city:string) => {
        setSelectedCity(city);
        setModalVisible(true);
    };
    const renderWeatherComponent = () =>{
        if(selectedCity === 'London'){
            return <WeatherLondon/>;
        }else if (selectedCity === 'Bangkok'){
            return <WeatherBangkok/>
        }
        return null;
    }
  return (
    <View style={styles.centeredView}>
        <Pressable 
        style={[styles.button,styles.buttonOpen]}
        onPress = {()=> [setModalVisible(true),setSelectedCity('London')]}
        >
           <Text style={styles.textStyle}>London</Text> 
        </Pressable>
        
        <Pressable 
        style={[styles.button,styles.buttonOpen]}
        onPress = {()=> [setModalVisible(true),setSelectedCity('Bangkok')]}
        >
           <Text style={styles.textStyle}>Bangkok</Text> 
        </Pressable>
       
       <Modal
       animationType="slide"
       transparent={true}
       visible ={isModalVisible}
       onRequestClose={() => setModalVisible(!isModalVisible)}
       >
        <View style={styles.modalView}>
        {renderWeatherComponent()}
        <Pressable
        style={[styles.button,styles.buttonOpen]}
        onPress={()=> setModalVisible(!isModalVisible)}
        >
            <Text style={styles.textStyle}>Close</Text>
        </Pressable>
        </View>
       </Modal>


        </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 700,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
