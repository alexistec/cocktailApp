import React from 'react';
import {createAppContainer}   from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider}             from 'react-redux';
import HomeScreen             from './src/components/home';
import CoktailSearchScreen    from './src/components/search';
import {store}                from './src/redux/store';


let RootStack = createStackNavigator({
  Home : HomeScreen,
  CoktailSearch : CoktailSearchScreen
});

let Navigation = createAppContainer(RootStack);


export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Navigation />
      </Provider> 
    )
  
  }
}