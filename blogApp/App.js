// import React from 'react';
// import { Button } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { Provider } from './src/components/context/BlogContext';
// import ShowScreen from './src/screens/blogScreens/ShowScreen';
// import CreateScreen from './src/screens/blogScreens/CreateScreen';
// import EditScreen from './src/screens/blogScreens/EditScreen';

// //NavigationScreens==========---------------------

// import { IndexScreen } from './src/screens/blogScreens/IndexScreen';
// import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
// import { ShopScreen } from './src/screens/ShopScreen/ShopScreen';
// import { NotificationsScreen } from './src/screens/Notification/Notifications';
// import { VideoScreen } from './src/screens/VideoScreen/Video';


// //navigation======----------------------

// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// const Drawer = createDrawerNavigator();


// function MyDrawer() {

//   return <Drawer.Navigator>
//     <Drawer.Screen name="Shoping" component={ShopScreen} />
//     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     <Drawer.Screen name="Index" component={IndexScreen} />
//     <Drawer.Screen name="Home" component={HomeScreen} />
//   </Drawer.Navigator>
// }


// const Stack = createStackNavigator();

// function StackNav()  {
//   return (
//     // <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName={"Home"}
//         screenOptions= {{
//           headerTitleAlign: 'center',
//           headerTintColor: 'gray',
//           headerStyle: {
//             backgroundColor: 'lightblue'
//           }
//         }}
//       >
//        <Stack.Screen 
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "Shop Here",
//           headerRight: () => <Button title='Edit' />
//         }}
//       />
//       <Stack.Screen 
//         name="Shop"
//         component={ShopScreen}
//         options={{
//           title: "Shop Here",
//           headerRight: () => <Button title='Edit' />
//         }}
//       />
//        <Stack.Screen 
//         name="Index"
//         component={IndexScreen}
//         options={{
//           title: "Blog",
//           headerRight: () => <Button title='Edit' />
//         }}
//       />
//        <Stack.Screen 
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{
//           title: "Notifications",
//           headerRight: () => <Button title='Edit' />
//         }}
//       />
//        <Stack.Screen 
//         name="Video"
//         component={VideoScreen}
//         options={{
//           title: "Record Video",
//           headerRight: () => <Button title='Edit' />
//         }}
//       />

//       </Stack.Navigator>
//     // </NavigationContainer>
//   )
// }



// const App = createAppContainer(StackNav);

// export default () => {
//   return(
//     <Provider>
//        <App/>
//     </Provider>
   
//   )
// }


// const navigator = createStackNavigator({
//   Index: IndexScreen,
//   Show: ShowScreen,
//   Create: CreateScreen,
//   Edit: EditScreen
// },{
//   initialRouteName: 'Index',
//   defaultNavigationOptions: {
//     title: 'Blogs'
//   }
// });

import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "react-navigation/native";
import {  createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

function CustomerHeader({ title, isHome, navigation }){
  return (
        <View style={{flexDirection: 'row', height:50}}>
       {
        isHome?
           <View style={{flex:1, justifyContent: 'center'}}>
           <Image style={{width:30, height: 30, marginLeft: 5}}
             source={require('./assets/icon.png')}
             resizeMode='contain'
           />
           </View>
            :  
           <TouchableOpacity style={{flexDirection:'row', alignItem:'center'}}
             onPress={() => navigation.goBack()}
           >
           <Image style={{width:20, height:20, marginLeft:5}}
             source={require('./assets/reply.png')}
             resizeMode='contain'
           />
           <Text>Back</Text>
           </TouchableOpacity>
       }
           <View style={{flex: 1.5, justifyContent: 'center'}}>
           <Text style={{textAlign: 'center'}}>{title}</Text>
           </View>
           <View style={{flex:1}}></View>
       </View>
  )
}

function HomeScreen({ navigation }){
  return (
    <SafeAreaView style={{flex: 1 }}>
      <CustomerHeader title="Home" isHome={true} navigation={navigation} />
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Home</Text>
          <TouchableOpacity
           style={{marginTop:20}}
           onPress={() => navigation.NavigationContainer.navigate('HomeDetails')}
          >
        <Text>Go home detail</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

function HomeScreenDetails({navigation}) {
  return (
    <SafeAreaView style={{flex: 1 }}>
      <CustomerHeader title="Home Detail" navigation={navigation} />
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Home Details</Text>  
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }){
  return (
    <SafeAreaView style={{flex: 1 }}>
      <CustomerHeader title="Setting" isHome={true} />
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Home</Text>
         <TouchableOpacity
           style={{marginTop:20}}
           onPress={() => navigation.navigate('settingsDetails')}
         >
          <Text>Go setting detail</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function SettingsScreenDetails({ navigation }){
  return (
    <SafeAreaView style={{flex: 1 }}>
      <CustomerHeader title="Setting detail" navigation={navigation} />
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
          <Text> settings detail</Text>
      </View>
    </SafeAreaView>
  )
}


const Tab = createBottomTabNavigator();

const navOptionHandler = () => {
  headerShown: false
}

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
       <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
       <StackHome.Screen name="HomeDetails" component={HomeScreenDetails} options={navOptionHandler} />
    </StackHome.Navigator>

  )
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Settings">
       <StackSetting.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
       <StackSetting.Screen name="SettingsDetails" component={SettingsScreenDetails} options={navOptionHandler} />
    </StackSetting.Navigator>

  )
}





export default function App(){
  return (
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        >

          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="SettingsDetails" component={SettingStack} />
        </Tab.Navigator>
      </NavigationContainer>
  )}