import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useInterval from '../hooks/useInterval';
import gStyles from '../styles/main';

function Splash() {
	const [dotNumber, setDotNumber] = useState(1);

	const dots = '.'.repeat(dotNumber);

	useInterval(() => {
		setDotNumber(dotNumber < 3 ? dotNumber + 1 : 1);
	}, 1000);

	return (
		<SafeAreaView style={[gStyles.centerContent]}>
		<ImageBackground 
		source={require('../../assets/boxes.jpg')}
		style={mystyles.image}>
      <Text style={mystyles.text}>Inside</Text>
    
		
			<Image
				source={require('../../assets/splash.png')}
				style={splashStyles.image}
			/>

			<Text style={gStyles.textCenter}>Loading {dots}</Text>
		
		</ImageBackground>
		</SafeAreaView>
	);
}


const mystyles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	image: {
	  flex: 1,
	  justifyContent: "center"
	},
	text: {
	  color: "white",
	  fontSize: 42,
	  lineHeight: 84,
	  fontWeight: "bold",
	  textAlign: "center",
	  backgroundColor: "#000000c0"
	}
  });

const splashStyles = StyleSheet.create({
	image: {
		height: 200,
		width: '100%',
	},
});



export default Splash;
