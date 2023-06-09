import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SignIn from '../../screens/splash/SignIn';
import SignUp from '../../screens/splash/SignUp';
import Onboarding from '../../screens/splash/Onboarding';


const Login = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Login.Navigator screenOptions={{headerShown: false}}>
            <Login.Screen name='Onboard' component={Onboarding} />
            <Login.Screen name='SignIn' component={SignIn} />
            <Login.Screen name='SignUp' component={SignUp} />
        </Login.Navigator>
    )
}

export default LoginStack
