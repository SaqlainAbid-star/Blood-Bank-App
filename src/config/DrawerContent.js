import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { AuthContext } from '../navigation/AuthProvider';

function DrawerContent(props) {

    const { user, logout } = useContext(AuthContext);

    const paperTheme = useTheme();

    const [isDarkTheme, setisDarkTheme] = useState(false);
    const toggleTheme = () => {
        setisDarkTheme(!isDarkTheme);
    }

    const signOut = () => {
        alert("User sign out")
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{uri:user.photoURL}}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{user.displayName}</Title>
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntDesign
                                    name="adduser"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Add Donor"
                            onPress={() => { props.navigation.navigate('AddDonor') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="heart-plus-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Add Request"
                            onPress={() => { props.navigation.navigate('AddRequest') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="search"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Blood Donors"
                            onPress={() => { props.navigation.navigate('Donors') }}
                        />

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Fontisto
                                    name="blood-drop"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Blood Requests"
                            onPress={() => { props.navigation.navigate('Requests') }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Blood Banks"
                            onPress={() => { props.navigation.navigate('Banks') }}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name="notes-medical"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Blood Compatibility"
                            onPress={() => { props.navigation.navigate('Blood Compatibility') }}
                        /> */}

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => logout()}
                />
            </Drawer.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent;
