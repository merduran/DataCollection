import _ from 'lodash';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    ScrollView,
    Dimensions,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    PixelRatio,
    Image
} from 'react-native';
import { NavigationToolBarIOS } from 'react-native-navigation';
import FacilityButtonBasketball from './FacilityButtonBasketball.js';
import FacilityButtonTrack from './FacilityButtonTrack.js';
import FacilityButtonGym from './FacilityButtonGym.js';
import FacilityButtonPool from './FacilityButtonPool.js';
import ButtonComponent from './ButtonComponent.js';
import GreetingComponent from './GreetingComponent.js';


const { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');

var box_count = 2;
var box_height = (height-66) / box_count;

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = { clickedGym: null, clickedFacility: null, disabled: false, time: this.time() };
        this.setProps = this.setProps.bind(this);
        var myThis = this;
        setInterval(function(){
            myThis.setState({
                time: myThis.time(),
            }); 
        }, 30000);
    }

    setProps(_clickedGym, _clickedFacility, _disabled){
        if (_clickedGym !== null){ this.setState({ clickedGym: _clickedGym }) };
        if (_clickedFacility !== null){ this.setState({ clickedFacility: _clickedFacility }) };
        if (_disabled !== null){ this.setState({ disabled: _disabled }) };
    }

    showCount(){
        if (this.state.disabled){
            return <GreetingComponent clickedGym={this.state.clickedGym} clickedFacility={this.state.clickedFacility}></GreetingComponent>;
        }
        return null;
    }

    time() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ampm;
        return strTime;
    }

    render(){
        var myThis = this;
        return(
            <View style={{flex: 1, width: width, height: height}}>
                <View style={{width: width, height: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20}}>
                    <Text style={{fontSize: 70}}>OMAC</Text>
                </View>
                <Text style={{textAlign: 'center', fontSize: 20}}>Please tap on why you are here</Text>
                <View style={{marginTop: 190, height: .3 * height, width: width, flexDirection: 'row', justifyContent: "center", alignItems: "center", position: 'absolute'}}>
                    <ButtonComponent buttonColor="#DE8100" gym="OMAC" facility="basketball" img={require("./Icons/basketball_court.png")} setProps={this.setProps} clickedGym={this.state.clickedGym} clickedFacility={this.state.clickedFacility} disabled={this.state.disabled}></ButtonComponent>
                    <ButtonComponent buttonColor="#B82A22" gym="OMAC" facility="track" img={require("./Icons/tracks.png")} setProps={this.setProps} clickedGym={this.state.clickedGym} clickedFacility={this.state.clickedFacility} disabled={this.state.disabled}></ButtonComponent>
                    {this.showCount()}
                </View>
                <View style={{marginTop: 50, position: 'absolute', bottom: 40, flexDirection: 'row', justifyContent: "center"}}>
                    <ButtonComponent buttonColor="#25D92C" gym="OMAC" facility="others" img={require("./Icons/others.png")} setProps={this.setProps} clickedGym={this.state.clickedGym} clickedFacility={this.state.clickedFacility} disabled={this.state.disabled}></ButtonComponent>
                </View>
            </View>
        );
    }
}


module.exports = HomeScreen;