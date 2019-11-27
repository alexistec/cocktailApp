import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import Page from './page';

class HomeScreen extends Component<any,any>{
    static navigationOptions={
        header:null
    }

    constructor(props:any){
        super(props);
        this.onSearchCocktailPage = this.onSearchCocktailPage.bind(this);
    }

    onSearchCocktailPage(){
        this.props.navigation.navigate('CoktailSearch');
    }

    render(){
      return(
        <Page onSearchCocktail={this.onSearchCocktailPage}/>      
      )
    }

}




export default HomeScreen;
