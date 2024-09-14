import { StyleSheet, Text, View, ActivityIndicator,ListRenderItem, Dimensions } from "react-native";
import React, { useLayoutEffect, useState , useCallback } from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,

} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar , Tile } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [detail, setDetail] = React.useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [route,navigation]);

  const getProductbyId = async () => {
    try {
      setLoading(true);
      const response = await findProductbyId(route.params.id);
      setDetail(response.data.data);
    } catch (error: any) {
      console.log(error.message);
     } 
    //finally {
    //   setLoading(false);
    // }
  };
  useFocusEffect(
    React.useCallback(() => {
      getProductbyId();
    }, [])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }
  const _renderItem: ListRenderItem<any> = ({ item }) => (
    <>
    <Tile
                    imageSrc={{
                        uri: 'https://www.americanoceans.org/wp-content/uploads/2023/01/Pacific-ocean-horizon.jpg',
                    }}
                    title={item.ch_title}
                    titleStyle={styles.titleStyle}
                    containerStyle={styles.tileContainer}
                    caption={item.ch_dateadd}
                    captionStyle={styles.captionStyle}
                    featured
                    activeOpacity={0.9}
                    width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
                />
    </>
        );
  return (
    <View>
      
      <FlatList
        data={detail}
        keyExtractor={(item: any) => item.ch_id.toString()}
        renderItem={_renderItem}
        onRefresh={()=> {
            getProductbyId();
        }}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#f0f0f0', // สีพื้นหลัง
    },
    listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
    },
    titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue', // สีขาวส าหรับชื่อ
    },
    tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: 'hidden', //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    },
    captionStyle: {
    fontSize: 14,
    color: 'blue' // สีขาวส าหรับวันที่
    },
    });
