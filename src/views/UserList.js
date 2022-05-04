import React, { useContext } from "react";
import {FlatList, View, Alert} from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default props => {


    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDelete(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user, 
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    } 

    function Actions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDelete(user)}
                    type='clear'
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            
            </>
        )
    }

    function getUserItem( { item:user } ) {
        return (
            <ListItem 
                onPress={() => props.navigation.navigate('UserForm', user)} 
                bottomDivider>
                <Avatar source={{uri: user.avatarUrl}} size={40}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Actions user={user} />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}