import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Container,Header,Content,Button,Icon} from 'native-base';

interface Props {
    onSearchCocktail():any
}


function Page(props:Props){

    const {
        onSearchCocktail
    } = props;

    return(
        <View style={styles.container}>
            <Button  iconLeft block light onPress={onSearchCocktail}>
                <Icon name='search' />
                <Text>Search your favorite cocktail</Text>
            </Button>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DF0CA4'
    }
})

export default Page;