import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar, Platform,
        TouchableOpacity, ImageBackground, Image} from "react-native";

export default class Menu extends Component{
    render(){
        return(
           <View style = {styles.container}>
                <SafeAreaView style={styles.emptyArea}/>
                <ImageBackground style={styles.topGround}
                                 source={require("../assets/bg_image.png")}>
                    <View style={styles.titlePosition}>
                        <Text style={styles.title}>Space Pocket</Text>
                    </View>
                    <TouchableOpacity style={styles.pressHere}
                                      onPress={() => this.prop.navigation.navigate("ISSLocation")}>
                        <Text style={styles.h1}>ISS Location</Text>
                        <Text style={styles.number}>1</Text>
                        <Text style={styles.h3}>{"More info --->"}</Text>
                        <Image style={styles.icon}
                               source={require("../assets/iss_icon.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pressHere}
                                      onPress={() => this.prop.navigation.navigate("Info")}>
                        <Text style={styles.h1}>Meteors</Text>
                        <Text style={styles.number}>2</Text>
                        <Text style={styles.h3}>{"More info --->"}</Text>
                        <Image style={styles.icon}
                               source={require("../assets/meteor_icon.png")}/>
                    </TouchableOpacity>
                </ImageBackground>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff"
    },
    emptyArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
    titlePosition: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    pressHere: {
        flex: 0.25,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 80,
        borderRadius: 30,
        backgroundColor: "#fff"
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        color: 0,
        marginTop: 75,
        paddingLeft: 30
    }, 
    topGround: {
        flex: 1,
        resizeMode: "cover"
    },
    number: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        top: -25,
        zIndex: -1
    }, 
    h2: {
        paddingLeft: 30,
        color: "orange",
        fontSize: 15
    },
    icon: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})