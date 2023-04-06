import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import DetailsScreen from "../screens/DetailsScreen"

const screens = {
    Home: {
        screen: Home
    },
    DetailsScreen: {
        screen: DetailsScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)