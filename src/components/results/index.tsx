import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Content,List,Card,ListItem,Left,Body,Thumbnail,Spinner} from  'native-base';
import {connect}   from 'react-redux';
import {Store} from '../../redux/store';
import { compose } from 'redux';

interface Props{
    cocktails? : [{}],
    isLoading ? :boolean
}


class Results extends Component<Props,any>{

    constructor(props:Props){
        super(props);
    }


    render(){
        const {cocktails,isLoading} = this.props;
        const isEmpty = cocktails.length === 0;
        return(
            <Content style={{backgroundColor:'#DF0CA4'}}>
                {isLoading && 
                    <Spinner color='red'/>
                }
                {isEmpty?
                    null
                :
                    cocktails.map(item=>
                        <List style={{borderWidth:0}} key={item.idDrink}>
                            <Card style={{paddingBottom:10}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{uri:item.strDrinkThumb}}/>
                                    </Left>
                                    <Body style={{borderWidth:0}}>
                                        <Text style={{color:'gray',fontWeight:'bold',borderWidth:0,fontSize:16}}>{item.strDrink} </Text>
                                    </Body>
                                </ListItem>
                            </Card>
                        </List>   
                    )
                }    
            </Content>
        )
    }
}



const mapStateToProps = (state:Store)=>{
    return{
        cocktails:state.cocktail.cocktails,
        isLoading : state.cocktail.isLoading
    }
}


export default compose(connect(mapStateToProps)(Results));