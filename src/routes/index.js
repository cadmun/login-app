import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import PageProfile from '../pages/Profile'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Welcome" 
      component={Welcome}
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{ headerShown: false }}  
      />
      <Stack.Screen 
      name="PageProfile" 
      component={PageProfile}
      options={{
        headerShown: true,
        headerTransparent: true,
        title: "",
        headerLeft: () => (
          <Animatable.View
            style={{
              flexDirection: "row",
              height: 54,
              alignSelf: "flex-start",
              alignItems: "center"
            }}
            animation="fadeInDownBig"
            duration={400}
            useNativeDriver={true}
          >
            <TouchableOpacity
              style={{
                borderRadius: 50,
                width: 40,
                height: 40,
                backgroundColor: "#F1F1F1",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign
                name="arrowleft"
                size={18}
                color="#334996"
              />
            </TouchableOpacity>
          </Animatable.View>
        ),
        headerBackTitleVisible: false,
        // headerTintColor: "#F1F1F1"
      }}      
      />
    </Stack.Navigator>
  );
}
