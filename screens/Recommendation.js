// Importing React Modules and Components
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

// Importing Other Modules
import axios from 'axios';

// Creating a Class for the Recommendation Screen
export default class Recommendation extends Component {
    // Creating a Constructor for the Recommendation Screen
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // Creating a Function to get the data from the API
    getData() {
        const url = 'https://afc9-49-37-41-207.in.ngrok.io/recommended-articles';
        axios.get(url)
            .then(async response => {
                this.setState({
                    data: response.data.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Creating a componentDidMount Method for the Recommendation Screen
    componentDidMount() {
        this.getData();
    }

    // Creating a keyExtractor for the Recommendation Screen
    keyExtractor = (item, index) => index.toString();

    // Creating renderItem for the FlatList
    renderItem = ({ item, index }) => {
        return (
            <Card containerStyle={[styles.cardContainer,{
                backgroundColor: `rgb(${Math.floor(Math.random() * 56) +
                    200}, ${Math.floor(Math.random() * 56) + 200},${Math.floor(
                    Math.random() * 56
                  ) + 200})`
            }]} key={`card-${index}`}>
                <Card.Title>{item.title}</Card.Title>
                <View style={styles.iconContainer}>
                    <Icon type={"antdesign"} name={"heart"} size={RFValue(20)} />
                    <Text style={{ fontSize: RFValue(18) }}>{item.total_events}</Text>
                </View>
            </Card>
        );
    }

    // Creating a Function for the Recommendation Screen
    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

// Creating a Stylesheet for the Recommendation Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cardContainer: {
        flex: 1,
        marginBottom: RFValue(20),
        borderRadius: RFValue(10),
        justifyContent: 'center',
        height: RFValue(110)
    },
    cardTitle: {
        fontSize: RFValue(25),
        alignSelf: 'flex-start',
        paddingLeft: RFValue(15),
        marginTop: RFValue(65),
        color: '#fff'
    },
    cardSubtitle: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: RFValue(15),
        fontSize: RFValue(15)
    }
});