import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button , Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { login } from "../services/auth-service";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
import { setIsLogin } from "../auth/auth-slice";
import { useAppDispatch } from "../redux-toolkit/hook";
const LoginScreen = (): React.JSX.Element => {
  const [showPassword,setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  //1.define validation with Yub schema
  
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email")
      .email("Email format is invalid"),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "Password must be at least 3 characters."),
  });
  //2. Apply with React Hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onLogin = async (data:any)=>{
    try {
        const response = await login(data.email, data.password);
        if(response.status===200){
          dispatch(setIsLogin(true));
            // console.log('login success');
            Toast.show({type:'success',text1:'Login Success'});
        }
    } catch (error:any) {
        let err:AxiosError<any> = error; // แปลงความผิดพลาดให้เป็น AxiosError   
        if(err.response?.status===401){
            // console.log(err.response.data.message);
            Toast.show({type:'error',text1:err.response.data.message})
        }else{
            Toast.show({type:'error',text1: "เกิดข้อผิดพลาด ไม่สาท่ีถติดต่อ Server ได้"})
            // console.log("");
        }    
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon = {
                // เพิ่ม icon สำหรับการแสดงรหัสผ่าน
                <Icon
                name={showPassword?"eye":"eye-off"}
                type="feather"
                onPress={()=>setShowPassword(!showPassword)}
               
                />
              }
                              
              keyboardType="default"
              secureTextEntry = {!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button title="Log In"
        size="lg"
        onPress={handleSubmit(onLogin)}
        loading={isSubmitting}
        disabled = {!isValid} />
      </Card>
    </View>
  );
};
export default LoginScreen;
