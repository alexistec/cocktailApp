import React ,{Component} from 'react';
import {View, Text,ViewStyle, Alert}      from 'react-native';
import {Header,Left,Item,Input,Button,Icon} from 'native-base';
import {NavigationStackOptions}  from 'react-navigation-stack';
import {searchCocktails} from '../../redux/actions/cocktail';
import {connect}                            from 'react-redux';
import {Store} from '../../redux/store';
import { bindActionCreators,Dispatch,compose } from 'redux';
import { withNavigation } from 'react-navigation';

interface Props{
    searchCocktail (text:string) :any,
    cocktails : [{}],
    navigation: any;
}


class AppBar extends Component<Props,any>{
    static navigationOptions:NavigationStackOptions = {
        header:null
    }

    constructor(props:Props){
        super(props);
        //this.onBackHomePage = this.onBackHomePage.bind(this)
    }

    searchCocktailText = (text:string)=>{
        if(text.length >4){
            const {searchCocktail} = this.props;
            searchCocktail(text);
        }
    }

    render(){
        const {navigation} = this.props;
        return(
            <Header searchBar transparent>
                <Left style={{flex:null}}>
                    <Button transparent onPress={()=>navigation.navigate('Home')}>
                        <Icon name="arrow-back" style={{color:'#000'}}/>
                    </Button>
                </Left>
                <Item>
                    <Icon name="search" />
                    <Input placeholder="Search cocktail" onChangeText={(text:string) => this.searchCocktailText(text)}/>
                </Item>
            </Header>
        )
    }
}




const mapStateToProps = (state:Store) =>{
    return {
        cocktails : state.cocktail.cocktails
    };
};

const mapDispatchToProps = (dispatch:Dispatch) =>{
    return bindActionCreators({
        searchCocktail : searchCocktails
    },
    dispatch
    )
}



export default withNavigation(compose(connect(mapStateToProps,mapDispatchToProps)(AppBar)));