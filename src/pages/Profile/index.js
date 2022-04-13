import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

class FormContainer extends React.Component {
  render() {
  return (
      <View style={{ width: '33%'}}>
          <Text style={[styles.title, this.props.styles]}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}
const PageProfile  = () => {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
          source={require('../../assets/profile.png')}
          style={{ width: '50%', marginTop: '5%'}}
          resizeMode="contain"
          />
        <Animatable.Text delay={500} animation="fadeInLeftBig" style={styles.profileText}>
          Matheus
        </Animatable.Text>
        <Animatable.Text delay={500} animation="fadeInRightBig" style={styles.profileDescription}>
          Developer
        </Animatable.Text>

      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
       <FormContainer 
       title="Projects"
       text="30"
       />
       <FormContainer 
       title="Skill"
       text="React Native"
       />
       <FormContainer 
       title="Owner"
       text="Astro"
       styles={{ borderRightWidth: 0}}
       />
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Begin</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#334996' 
  },
  containerLogo: {
    backgroundColor: '#334996', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    marginTop: -20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  profileDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#fff'
  },
  containerForm: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    borderRightWidth: 3,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#334996', 
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default PageProfile; 