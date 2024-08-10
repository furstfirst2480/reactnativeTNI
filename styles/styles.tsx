import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  fullname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  message: {
    fontSize: 16,
    color: '#666'
  },
  content: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 16,
    width: '90%'
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444'
  },
  footer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 8
  }
});

const stylesProfile = StyleSheet.create({
  container: {
    justifyContent: "flex-start", // จัดให้องค์ประกอบภายในอยู่ต้นแนวตั้ง
    alignItems: "center", // จัดให้องค์ประกอบภายในอยู่ตรงกลางแนวนอน
    padding: 20, // เพิ่ม padding รอบ ๆ คอนเทนเนอร์ 20 หน่วย
    backgroundColor: "white", // ตั้งค่าสีพื้นหลังเป็นสีเทาอ่อน
  },
  profileContainer: {
    flexDirection: "row", // จัดให้องค์ประกอบภายในเรียงตามแนวนอน
    alignItems: "center", // จัดให้อยู่ตรงกลางในแนวขวาง (แนวตั้ง)
    width: "100%", // ใช้ความกว้างเต็มหน้าจอ
    padding: 20, // เพิ่ม padding ภายในคอนเทนเนอร์ 20 หน่วย
    backgroundColor: "white",
    borderRadius: 10, // ทำให้ขอบของคอนเทนเนอร์มีมุมมน 10 หน่วย
    elevation: 5, // เพิ่มเงาให้กับคอนเทนเนอร์ (เฉพาะ Android)
    marginTop: 50, // เพิ่มระยะห่างจากด้านบน 50 หน่วย
  },
  profileImage: {
    width: 100, // กำหนดความกว้างของรูปภาพเป็น 100 หน่วย
    height: 100, // กำหนดความสูงของรูปภาพเป็น 100 หน่วย
    borderRadius: 50, // ทำให้รูปภาพเป็นวงกลม (ครึ่งหนึ่งของความกว้างและความสูง)
    marginRight: 20, // เพิ่มระยะห่างทางขวาของรูปภาพ 20 หน่วย
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00008b",
  },
});

const stylesLogin = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: '#ffffff', // ตั้งค่าสีพื้นหลังเป็นสีขาว
    borderRadius: 10, // เพิ่มความมนให้กับขอบคอนเทนเนอร์
    elevation: 3, // เพิ่มเงาให้กับคอนเทนเนอร์ (เฉพาะ Android)
    width: '100%', // ตั้งความกว้างของ container ให้เต็มหน้าจอ
  },
  input: {
    height: 45, // เพิ่มความสูงของ TextInput
    borderColor: "#cccccc", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
    borderWidth: 1, 
    borderRadius: 8, // เพิ่มความมนให้กับขอบ TextInput
    marginBottom: 15, // เพิ่มระยะห่างด้านล่างระหว่าง TextInput
    paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
    backgroundColor: "#f9f9f9", // ตั้งค่าสีพื้นหลังของ TextInput
  }, 
});


export { styles, stylesProfile, stylesLogin };