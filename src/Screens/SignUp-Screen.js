import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView ,} from 'react-native';
import { useState } from 'react';


export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  return (
  <>
    <ImageBackground
      source={require('../images/todo-list.jpg')}
      style={styles.backgroundImage}
      resizeMode='strech'
    />

    <View style={[styles.overlay, styles.cardContainer]} />

    <View style={styles.headerText}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Please sign up to continue</Text>
    </View>

    <View style={styles.card}>
    
    

    <View style={styles.formContainer}>

    <Text style={styles.heading}>Welcome on NextUP</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sign-in')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20}}>
        <Text style={{fontSize:20, color:'black', fontWeight:'bold', paddingBottom:16}}>Already have an account?{" "}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("sign-in")}>
        <Text style={{color:'#c2272d', fontSize:20, fontWeight:'bold', paddingBottom:16}}>Sign In</Text>
      </TouchableOpacity>
      </View>
      </View>

    </View>

  </>
)};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerText: {
    position: 'absolute',
    top: 170,
    left: 20,
  },

  card:{
    flex:2,
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:25,
    paddingBottom:40,
    elevation:5,
    flexDirection:'column',
    justifyContent:'flex-start',
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,
  },    
  formContainer:{
    flex:1,
    justifyContent:'space-evenly',

  },
  input:{
    width:'100%',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:8,
    padding:16,
    fontSize:22,
    marginVertical:10,
    color:'#000',
  },
  title:{
    fontSize:33,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'left',
  },
  subtitle:{
    fontSize:19,
    color:'#fff',
    textAlign:'left',
    marginTop:10,
  },
  button:{
    backgroundColor:'#c2272d',
    padding:16,
    borderRadius:8,
    marginTop:0,
  },
  buttonText:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
  },
  

});
