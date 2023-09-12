import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../pages/Home';
import Detail from '../pages/Detail';


 const Stack = createNativeStackNavigator ();
 
 const Router = () => {

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= "Home" component={Home} options={{
            title:"Ahsen Döviz",
            headerTitleAlign:"center",
            headerTitleStyle:{color:"blue"}
          }}/>
          <Stack.Screen name="Detail" component={Detail} options={{
            title:"Detay",
            headerTitleAlign:"center",
            headerTitleStyle:{color:"orange"},
          }}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
 };

 export default Router;