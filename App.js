import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/home'
import axios from 'axios'
import { View, Text } from 'react-native'
import Subjects from './screens/subjects'

export default function App() {

  const stack =  createNativeStackNavigator()
  axios.defaults.baseURL=""

  const StackStyle = { 
    animation: 'slide_from_left',
    headerBackVisible: false,
    headerTitle: ()=>{
      return(
        <Text>CGPA CALCULATOR</Text>
    )},
    headerTitleAlign: 'center',
    navigationBarColor: 'green',
    headerStyle: {
      backgroundColor: 'lime',
    },
    statusBarColor: 'black',
  }

  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='main' component={MainScreen} options={StackStyle}/>
        </stack.Navigator>
    </NavigationContainer>
  );
}


function MainScreen(){

  const Tab = createBottomTabNavigator();

  const TabStyle = {

  }

  return(
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
          bottom: 10,
          backgroundColor: '#F5F5F5',
          borderRadius: 100,
          width: '80%',
          left: 40,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      initialRouteName='home'
    >
      <Tab.Screen name="home" component={Home} options={{
        tabBarIcon: ()=>{
          return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>HOME</Text>
            </View>
          )
        }
      }}/>
      <Tab.Screen name="subjects" component={Subjects} options={{
        tabBarIcon: ()=>{
          return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>SUBJECTS</Text>
            </View>
          )
        }
      }}/> 
    </Tab.Navigator>
  )

}
