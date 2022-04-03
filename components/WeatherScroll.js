import { StyleSheet, Text, View, ScrollView, Image, _Image } from 'react-native'
import React from 'react'
import FutureForecast from './FutureForecast'
import moment from 'moment-timezone'

const CurrentTemp = ({data})=>{
    if(data && data.weather){
        const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
        return(
            <View style={styles.currentTempContainer}>
                <Image source={img} style={styles.image}/>
                <View style={styles.otherContainer}>
                    <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                    <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                </View>
            </View>
        )
    }
    else{
        return(
            <View>
            </View>
        )
    }
}

const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTemp data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
      <FutureForecast data={weatherData}/>
    </ScrollView>
  )
}

export default WeatherScroll

const styles = StyleSheet.create({
    scrollView:{
        flex:0.4,
        // backgroundColor:'#18181bcc',
        padding:30
    },
    image:{
        height:150,
        width:150
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 15
    },
    day:{
        fontSize:20,
        color:'white',
        backgroundColor:'#3c3c44',
        padding:7,
        textAlign:'center',
        fontWeight:'200',
        borderRadius:50,
        marginBottom:15
    },
    temp:{
        fontSize:16,
        fontWeight:'100',
        color:'white',
        textAlign:'center'
    },
    otherContainer:{
        paddingRight:40
    }
})