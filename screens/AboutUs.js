import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'




const developerData = [

  {
    name: 'Joeshua Villarosa',
    role: 'Front End/Back End',
    image: require('../assets/Developers/lesley.jpg')

    
  },
  {
    name: 'Lesley Ann Rantayo',
    role: 'Front End/Backend',
    image: require('../assets/Developers/lesley.jpg')


    
  },
  {
    name: 'Myro Mercado',
    role: 'Front End',
    image: require('../assets/Developers/lesley.jpg')


    
  },
  {
    name: 'Ashly Aficial',
    role: 'Gatherer Resources',
    image: require('../assets/Developers/lesley.jpg')


    
  },
  {
    name: 'Joeffrey Lambino',
    role: 'Gatherer Resources',
    image: require('../assets/Developers/lesley.jpg')


    
  },
]


const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPang Bulletin Application</Text>
      <Text style={styles.introText}>
        Welcome to the School Resource Finder, an application designed to
        provide a reviewer for IT students. Our dedicated team of developers has
        worked collaboratively to create a secure platform.
      </Text>

      <Text style={styles.developerTitle}>Meet the Developers</Text>
      {developerData.map((developer, index) => (
        <View key={index} style={styles.developerContainer}>
          <Image source={developer.image} style={styles.avatar} />
          <View style={styles.developerInfo}>
            <Text style={styles.name}>{developer.name}</Text>
            <Text style={styles.role}>{developer.role}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    
  
   
    
  },
  introText: {
    marginBottom: 20
  },
  developerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 90

    
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10
  },
  developerInfo: {
    flexDirection: 'column'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  role: {
    fontSize: 15
  }
})

export default AboutUs
