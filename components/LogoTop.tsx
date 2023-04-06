import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';


const LogoTop = () => {
    return ( 
        <SafeAreaView className='pt-14 items-center h-full bg-neutral-500'>
            <View className='border-b-2 w-full border-emerald-500 bg-neutral-500'>
                <Text className='text-emerald-500 font-bold text-center pb-2 text-base'>
                    Crypto Tracker
                </Text>
            </View>
        </SafeAreaView>
     );
}
 
export default LogoTop;