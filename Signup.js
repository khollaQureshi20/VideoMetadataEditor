import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
const Welcome = ({navigation}) => {
  const [isSelected, setSelection] = useState(false); // State for the checkbox

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#8f2c2d" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        
        {/* Split the text into two lines */}
        <Text style={styles.greetingText}>
          <Text style={styles.greetingWelcome}>Create an</Text>
          {'\n'}
          <Text style={styles.greetingBack}>Account!</Text>
        </Text>
      </View>

      <View style={styles.topContainer}>
        <Image
          source={require('../Assests/kids/mashroom3.png')}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
        <Text style={styles.emailText}>Username</Text>
          <TextInput
            
            placeholderTextColor="#f1c6b4"
            secureTextEntry
            style={styles.input}
          />
        <Text style={styles.emailText}>Email Address</Text>
          <TextInput
            
            placeholderTextColor="#f1c6b4"
            style={styles.input}
          />
          <Text style={styles.emailText}>Password</Text>
          <TextInput
            
            placeholderTextColor="#f1c6b4"
            secureTextEntry
            style={styles.input}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{ true: '#fdf0e0', false: '#fdf0e0' }} 
            />
            <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>SIGN UP</Text>
        </TouchableOpacity>


        <View style={styles.cloud}>
          <Image
            source={require('../Assests/kids/cloud.png')}
            style={styles.cloudImage}
            tintColor={'#fdf0e0'}
          />
        </View>

        <View style={styles.cloud2}>
          <Image
            source={require('../Assests/kids/cloud.png')}
            style={styles.cloudImage2}
            tintColor={'#fdf0e0'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf0e0',
  },
  backButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 16,
    color: '#8f2c2d',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  greetingText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  greetingWelcome: {
    fontSize: 35,
    color: '#8f2c2d',
  },
  emailText:{
    fontSize: 10,
    color: '#f1c6b4',
    fontSize: 16,
    marginLeft:20,
    marginBottom:10
  },
  greetingBack: {
    fontSize: 30,
    color: '#8f2c2d',
  },
  topContainer: {
    backgroundColor: '#8f2c2d',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 90,
    height: '100%',
  },
  image: {
    width: 180,
    height: 180,
    marginTop: -100,
    alignSelf: 'center',
  },
  inputContainer: {
    width: '100%',
    padding:30
  },
  input: {
    backgroundColor: '#ae5945',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 20,
    color: '#f1c6b4',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    color: '#f1c6b4',
    marginLeft: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#fdf0e0',
    borderRadius: 25,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  signInText: {
    color: '#8f2c2d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  cloudImage: {
    
    marginLeft: 115,
    width: 150,
    height: 150,
    position: 'absolute',
    resizeMode: 'contain',
  },
  cloud: {
    transform: [{rotate: '10deg'}],
  },
  cloud2: {
    
    transform: [{rotate: '-160deg'}, {scaleY: -1}],
  },
  cloudImage2: {
    marginTop:70,
    marginLeft:50,
    width: 150,
    height: 150,
    position: 'absolute',
    resizeMode: 'contain',
  },
 
});

export default Welcome;
