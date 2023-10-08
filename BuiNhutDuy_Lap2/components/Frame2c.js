import { StyleSheet, Text, TextInput, View, CheckBox, TouchableOpacity } from 'react-native'
import React from 'react'

const Frame2c = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PASSWORD GENERATOR</Text>
            <TextInput style={styles.mainInput} />
            <View style={styles.valid}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>Password length</Text>
                    <TextInput style={styles.input} />
                </View>
                <Wrapper name="Include lower case letters" isChecked={true}></Wrapper>
                <Wrapper name="Include upcase letters" isChecked={false}></Wrapper>
                <Wrapper name="Include number" isChecked={true}></Wrapper>
                <Wrapper name="Include special symbol" isChecked={false}></Wrapper>

            </View>
            <TouchableOpacity>
                <Text>GENERATE PASSWORD</Text>
            </TouchableOpacity>
        </View>
    )
}

const Wrapper = (props) => {
    return <View style={styles.wrapper}>
        <Text style={styles.text}>{props.name}</Text>
        <CheckBox value={props.isChecked} style={styles.checkbox} />
    </View>
}

export default Frame2c

const styles = StyleSheet.create({
    container: {
        padding: 30,
        textAlign: "center",
        alignItems: "center",
        width : "100%",
        backgroundColor : "#23235B"
    },
    title : {
        fontSize : 25,
        fontWeight : 700,
        color : "#fff",
        width : 180,
        textAlign : "center"
    },
    mainInput : {
        borderWidth : 1,
        borderColor : "#000",
        width : "100%",
        height : 55,
        padding : 10,
        backgroundColor : "#151537",
        color : "#fff"
    },
    input : {
        borderWidth : 1,
        borderColor : "#000",
        width : 120,
        height : 30,
        padding : 10,
        backgroundColor : "#fff",
        color : "#000"
    },
    checkbox : {
        width : 25, 
        height : 25,
        backgroundColor : "#fff",
        color : "#000"
    },
    wrapper : {
        width : "100%",
        display : "flex", 
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",

        marginBottom : 20
    },
    text : {
        color : "#fff",
        marginRight : 10
    }

})