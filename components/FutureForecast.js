import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FutureForecastItem = ()=>{
    const img = {uri:'https://www.seekpng.com/png/full/56-566829_rain-clipart-gloomy-weather-partly-cloudy-clipart-transparent.png'}
    return(
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>Mon</Text>
            <Image style={styles.image} source={img}/>
            <Text style={styles.temp}>Night - 26&#176;C</Text>
            <Text style={styles.temp}>Day - 36&#176;C</Text>
        </View>
    )
}

const FutureForecast = () => {
  return (
    <View style={styles.forecastItem}>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
    </View>
  )
}

export default FutureForecast

const styles = StyleSheet.create({
    image:{
        height:60,
        width:60
    },
    futureForecastItemContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        padding:20,
        marginLeft:10
    },
    day:{
        fontSize:20,
        color:'white',
        backgroundColor:'#3c3c44',
        padding:5,
        textAlign:'center',
        fontWeight:'200',
        borderRadius:50
    },
    temp:{
        fontSize:16,
        fontWeight:'100',
        color:'white',
        textAlign:'center'
    },
    forecastItem:{
        flexDirection:'row'
    }
})