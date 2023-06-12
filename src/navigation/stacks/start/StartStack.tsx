import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux';
import { useEffect } from 'react';
import { getLoggedIn } from '../../../redux/login/LoginSlice';
import TabMain from '../../TabMain';
import LoginStack from '../LoginStack';


const StartStack = () => {
    const result = useSelector<RootState, any>((state: any) => state.login);
    const dispatch = useDispatch<AppDispatch>();
    console.log('result', result);


    console.log(result);
    useEffect(() => {
        dispatch(getLoggedIn());
    }, []);

    if (result.loggedIn == 'true') {
        return <TabMain />;
    } else {
        return <LoginStack />;
    }
};
export default StartStack;