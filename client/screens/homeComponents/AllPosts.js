import * as WebBrowser from 'expo-web-browser';
import styled from 'styled-components'
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import dummyData from '../../../data/dummyData/getAllPosts.json';
import { SearchBar, Header } from 'react-native-elements';
import moment from 'moment';

export default class AllPosts extends React.Component {
  constructor() {
    super()
    this.state={
      data: dummyData,
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.singleEvent = this.singleEvent.bind(this);
  }

  updateSearch = search => {
    this.setState({ search });
  };

  singleEvent (evnt, i) {
    let bg = {uri : evnt.category.bg};
    return (
      // <EventBox key={i}>
        <EventBackground
          key = {i}
          source={bg}
        >
          <EventBox>
            <EventTitle>{evnt.title}</EventTitle>
            <EventForm>Starts {moment(new Date(evnt.schedule).toString()).calendar()}</EventForm>
            <EventForm>{evnt.currentAttendees === null ? `No one joined yet. ` : evnt.currentAttendees + ` people are going! `}
            {evnt.maxAttendees - evnt.currentAttendees} spots left. </EventForm>
            <EventForm>Posted {moment(evnt.created_at).fromNow()}</EventForm>
          </EventBox>
        </EventBackground>
      // </EventBox>
    )
  }

  render () {
    const { search } = this.state;

    return (
      <ScrollView>
        <View>
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        {this.state.data.map((evnt, i) => this.singleEvent(evnt,i))}
      </ScrollView>
    )
  }
}

// HomeScreen.navigationOptions = {
//   title: 'Meet Friends',
// };

<<<<<<< HEAD
=======


>>>>>>> 8e3642621914028619aa3c164e7e53f857e03c86
const EventTitle = styled.Text`
font-size: 36px;
color: #fff;
font-Family: Helvetica
`;

const EventForm = styled.Text`
font-size: 12px;
color: #D3D3D3;
font-Family: Helvetica
`;

const EventBackground = styled.ImageBackground`
flex:1;
margin:1%;

background-color:#fff;
width:98%;
height: 150px;
padding: 2%;
`;

const EventBox = styled.View`
background-color:rgba(0,0,0,0.5);
width:100%;
height: 130px;
padding: 2%;
`;

const styles = StyleSheet.create({
  evntContainer: {
    borderColor: 'red',
    borderWidth: 1,
    height:100,
    flex: 1
  }, 
  evntTitle: {
    color: 'pink',
    fontFamily: 'Helvetica',
    fontSize: 36
  }, 
  evntLocation: {
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70,
  }
})