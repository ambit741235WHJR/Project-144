// Importing React Modules and Components
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, AirbnbRating, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import { WebView } from 'react-native-webview';

// Importing Other Modules
import axios from 'axios';

// Creating a class for Home Screen
export default class Home extends Component {
    // Creating a constructor for Home Screen
    constructor(props) {
        super(props);
        this.state = {
            // Initializing the state
            articleDetails: {}
        }
    }
    
    // Fetching the article details from the API
    getArticleDetails = () => {
        const url = 'https://afc9-49-37-41-207.in.ngrok.io/get-article';
        axios.get(url)
            .then(response => {
                let details = response.data.data;
                /*details['duration'] = this.timeConvertion(details.duration);*/
                this.setState({ articleDetails: details });
            }).catch(error => {
                console.log(error);
            });
    }

    // Converting the duration from hours to minutes
    timeConvertion(duration){
        var hours = Math.floor(duration / 60);
        var minutes = duration % 60;
        return `${hours}hrs ${minutes}mins`;
    }

    // Storing the liked article details in the API
    likedArticle = () => {
        const url = 'https://afc9-49-37-41-207.in.ngrok.io/post-liked-articles';
        axios.post(url)
            .then(response => {
                this.getArticleDetails();
            }).catch(error => {
                console.log(error);
            });
    }

    // Storing the unliked article details in the API
    unlikedArticle = () => {
        const url = 'https://afc9-49-37-41-207.in.ngrok.io/post-unliked-articles';
        axios.post(url)
            .then(response => {
                this.getArticleDetails();
            }).catch(error => {
                console.log(error);
            });
    }

    // Storing the did not watched article details in the API
    didNotWatchedArticle = () => {
        const url = 'https://afc9-49-37-41-207.in.ngrok.io/post-did-not-watch-articles';
        axios.post(url)
            .then(response => {
                this.getArticleDetails();
            }).catch(error => {
                console.log(error);
            });
    }

    // Creating a componentDidMount method for Home Screen
    componentDidMount() {
        this.getArticleDetails();
    }

    // Creating a render method for Home Screen
    render() {
        const { articleDetails } = this.state;
        if (articleDetails.url){
            const { url } = articleDetails;
            /*return (
                <View style={styles.container}>
                    <Header
                        centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                        containerStyle={{
                            backgroundColor: '#1c1c1c',
                            justifyContent: 'space-around',
                            height: RFValue(50),
                            borderBottomWidth: 0
                        }}
                    />
                    <View style={styles.articleDetails}>
                        <Image source={{ uri: poster_link }} style={styles.poster} />
                        <View style={styles.articleInfo}>
                            <Text style={styles.articleTitle}>{title}</Text>
                            <Text style={styles.articleDuration}>{duration}</Text>
                            <Text style={styles.articleDescription}>{overview}</Text>
                            <View style={styles.rating}>
                                <Text style={styles.ratingText}>Rating</Text>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={rating}
                                    size={20}
                                    isDisabled={true}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.likedarticle}>
                            <View style={styles.button}>
                                <Icon name='thumb-up' type='material-community' color='#1c1c1c' size={RFValue(30)} />
                                <Text style={styles.buttonText}>Liked</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.unlikedArticle}>
                            <View style={styles.button}>
                                <Icon name='thumb-down' type='material-community' color='#1c1c1c' size={RFValue(30)} />
                                <Text style={styles.buttonText}>Unliked</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.didNotWatchedArticle}>
                            <View style={styles.button}>
                                <Icon name='eye-off' type='material-community' color='#1c1c1c' size={RFValue(30)} />
                                <Text style={styles.buttonText}>Did Not Watched</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );*/
            return (
                <View style={styles.container}>
                  <View style={styles.headerContainer}>
                    <Header
                      centerComponent={{
                        text: "Article Recommended",
                        style: styles.headerTitle
                      }}
                      rightComponent={{ icon: "search", color: "#fff", onPress: () => this.props.navigation.navigate("TabNavigator") }}
                      backgroundColor={"#d500f9"}
                      containerStyle={{ flex: 1 }}
                    />
                  </View>
                  <View style={{ flex: 0.75 }}>
                    <WebView source={{ uri: url }} />
                  </View>
                  {/*<View style={styles.subContainer}>
                    <View style={styles.subTopContainer}>
                      <Image style={styles.posterImage} source={{ uri: poster_link }} />
                    </View>
                    <View style={styles.subBottomContainer}>
                      <View style={styles.upperBottomContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{`${
                          release_date.split("-")[0]
                        } | ${duration}`}</Text>
                      </View>
                      <View style={styles.middleBottomContainer}>
                        <View style={{ flex: 0.3 }}>
                          <AirbnbRating
                            count={10}
                            reviews={["", "", "", "", ""]}
                            defaultRating={rating}
                            isDisabled={true}
                            size={RFValue(25)}
                            starContainerStyle={{ marginTop: -30 }}
                          />
                        </View>
        
                        <View style={{ flex: 0.7, padding: 15 }}>
                          <Text style={styles.overview}>{overview}</Text>
                        </View>
                      </View>*/}
                      <View style={styles.lowerBottomContainer}>
                        <View style={styles.iconButtonContainer}>
                          <TouchableOpacity onPress={this.likedArticle}>
                            <Icon
                              reverse
                              name={"check"}
                              type={"entypo"}
                              size={RFValue(30)}
                              color={"#76ff03"}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.unlikedArticle}>
                            <Icon
                              reverse
                              name={"cross"}
                              type={"entypo"}
                              size={RFValue(30)}
                              color={"#ff1744"}
                            />
                          </TouchableOpacity>
                        </View>{/*
                        <View style={styles.buttonCotainer}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={this.didNotWatchedArticle}
                          >
                            <Text style={styles.buttonText}>Did not watch</Text>
                          </TouchableOpacity>
                        </View>*/}
                      </View>
                    </View>
              );
        } else {
            return null
        }
    }
}

// Creating a stylesheet for Home Screen
/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    articleDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '50%',
        padding: RFValue(20)
    },
    poster: {
        width: '50%',
        height: '100%'
    },
    articleInfo: {
        width: '50%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    articleTitle: {
        fontSize: RFValue(30),
        fontWeight: 'bold',
        color: '#1c1c1c'
    },
    articleDuration: {
        fontSize: RFValue(20),
        color: '#1c1c1c'
    },
    articleDescription: {
        fontSize: RFValue(20),
        color: '#1c1c1c'
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '20%',
        padding: RFValue(20)
    },
    ratingText: {
        fontSize: RFValue(20),
        color: '#1c1c1c'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '50%',
        padding: RFValue(20)
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        height: '100%',
        padding: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(20),
        color: '#1c1c1c'
    }
});*/
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    headerContainer: {
      flex: 0.1
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: RFValue(18)
    },
    subContainer: {
      flex: 0.9
    },
    subTopContainer: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center"
    },
    posterImage: {
      width: "60%",
      height: "90%",
      resizeMode: "stretch",
      borderRadius: RFValue(30),
      marginHorizontal: RFValue(10)
    },
    subBottomContainer: {
      flex: 0.6
    },
    upperBottomContainer: {
      flex: 0.2,
      alignItems: "center"
    },
    title: {
      fontSize: RFValue(20),
      fontWeight: "bold",
      textAlign: "center"
    },
    subtitle: {
      fontSize: RFValue(14),
      fontWeight: "300"
    },
    middleBottomContainer: {
      flex: 0.35
    },
    overview: {
      fontSize: RFValue(13),
      textAlign: "center",
      fontWeight: "300",
      color: "gray"
    },
    lowerBottomContainer: {
      flex: 0.45
    },
    iconButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    buttonCotainer: {
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: RFValue(160),
      height: RFValue(50),
      borderRadius: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      marginTop: RFValue(15)
    },
    buttonText: {
      fontSize: RFValue(15),
      fontWeight: "bold"
    }
  });
  