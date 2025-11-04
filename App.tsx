import {useFonts} from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Nunito: require("@assets/fonts/Nunito-Regular.ttf")
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerLogo}>
        <Image
          source={require("./assets/images/logo.png")} style={styles.logo}
        />
        <Text style={styles.appName}>duolingo</Text>
        <Text style={styles.text}>The free, fun, and effective way to learn a language!</Text>
      </View>
     
      <View>
        <Pressable style={styles.buttonPrimary}>
          <Text  style={styles.buttonPrimaryText}>GET STARTED</Text>
        </Pressable>
        <Pressable style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>I ALREADY HAVE AN ACCOUNT</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerLogo:{
    alignItems: 'center',
    gap: 6
  },
  logo:{
      width: 180,
      height: 300,
      resizeMode: 'contain'
  },
  appName:{
      fontSize: 40,
      fontWeight: 600,
      color: "#77C93C",
      fontFamily: 'Nunito',
  },
  text:{
      color: '#777',
      fontFamily: 'Nunito',
      fontSize: 18
  },
  buttonPrimaryText:{
    color:  "#fff",
    fontFamily: 'Nunito',
    textAlign: 'center',
    fontWeight: '800',
    padding: 6,
  },
  buttonPrimary:{
    backgroundColor: '#77C93C',
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: 15,
    margin: 10,
    width: 500,
  },
   buttonSecondaryText:{
    color:  '#77C93C',
    fontFamily: 'Nunito',
    fontWeight: '800',
    textAlign: 'center',
    padding: 6,
   },
   buttonSecondary:{
    backgroundColor: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: 15,
    margin: 10,
    borderColor: '#777',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 500,

  },

});
