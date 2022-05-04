import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, Button } from "react-native";

export default ({route, navitagion}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input} 
                onChangeText={name => setUser({...user, name })} 
                placeholder="Informe seu nome"
                value={user.name}
                />
                <Text>Email</Text>
                <TextInput
                style={style.input} 
                onChangeText={email => setUser({...user, email })} 
                placeholder="Informe seu email"
                value={user.email}
                />
                <Text>URL do avatar</Text>
                <TextInput
                style={style.input} 
                onChangeText={avatarUrl => setUser({...user, avatarUrl })} 
                placeholder="Informe seu URLAvatar"
                value={user.avatarUrl}
                />
                <Button 
                    title="Salvar"
                    onPress={() => {
                        navitagion.goBack()
                    }}
                />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,

    }
})