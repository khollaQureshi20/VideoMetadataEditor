import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.greetingText}>Hi There!</Text>
        <Image
          source={require('../Assests/kids/mashroom.png')} 
          style={styles.image}
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTextPrimary}>I have an account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} 
         onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonTextSecondary}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cloud}>
        <Image
          source={require('../Assests/kids/cloud.png')} 
          style={styles.cloudImage}
        />
      </View>

      <View style={styles.cloud2}>
        <Image
          source={require('../Assests/kids/cloud.png')} 
          style={styles.cloudImage2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf0e0',
  },
  topContainer: {
    backgroundColor: '#b3422f', 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 40, 
    borderBottomRightRadius: 40,
    paddingVertical: 50,
  },
  greetingText: {
    fontSize: 30,
    color: '#FFFFFF', 
  },
  image: {
    width: 300,
    height: 300,
  },
  bottomContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
  buttonPrimary: {
    backgroundColor: '#b3422f',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonTextPrimary: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSecondary: {
    borderColor: '#b3422f',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonTextSecondary: {
    color: '#D9613C',
    fontSize: 18,
    fontWeight: '600',
  },
  cloudImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    resizeMode: 'contain',
  },
  cloud: {
    marginTop:140,
    transform: [{ rotate: '20deg' }],
  },
  cloud2: {
    marginLeft:10,
    
    transform: [{ rotate: '-20deg' }, { scaleX: -1 }], 
  },
  cloudImage2: {
    width: 150,
    height: 150,
    position: 'absolute',
    resizeMode: 'contain',
  },
});

export default Welcome;
