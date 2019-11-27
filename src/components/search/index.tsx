import React ,{Component} from 'react';
import {View, Text,ViewStyle, Alert}      from 'react-native';
import {Header,Left,Right,Container,Content,Item,Input,Button,Icon} from 'native-base';
import {NavigationStackOptions}                  from 'react-navigation-stack';
import AppBar from '../appBar';
import Results from '../results';

interface Props{
    increase():any;
    decrease(): any;
    counter : number;
}



class CoktailSearchScreen extends Component<Props,any>{
    static navigationOptions:NavigationStackOptions = {
        headerTitle:'Coktail',
        header:null
    }

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <Container>
                <AppBar/>
                <Results/>
            </Container>
        )
    }
}


export default CoktailSearchScreen;