import React,{useState} from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={{ margin: 16 }}>
      <TextInput label="Name" 
      value={name}
      onChangeText={(text) => setName}/>
      <TextInput label="Email" style={{ marginTop: 12 }}
      value={email}
      onChangeText={(text)=> setEmail}/>
      <TextInput label="Password" style={{ marginTop: 12 }}
      value={password}
      onChangeText={(text) => setPassword}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Button compact>Sign In</Button>
        <Button mode="contained">Sign Up</Button>
      </View>
    </View>
  );
};

export default SignUp;
