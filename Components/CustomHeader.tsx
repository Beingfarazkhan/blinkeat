import Colors from '@/constants/Colors';
import { LinearGradient } from "expo-linear-gradient";;
import React, { Component, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Platform, StatusBar, Image, TextInput } from 'react-native'
import { Link } from 'expo-router';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from './BottomSheet';

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <View style={styles.searchField}>
                    <Ionicons name='search' size={20} color={Colors.mediumDark} style={styles.searchIcon} />
                    <TextInput style={styles.input} placeholder='Search for Restaurants, Dishes...' />
                </View>
                <Link href={"/(modal)/filter"} asChild>
                    <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name='options' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    }
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <BottomSheet ref={bottomSheetRef} />
            <View style={styles.container}>
                <TouchableOpacity onPress={openModal}>
                    <Image source={require('@/assets/images/bike.png')} style={styles.bike} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                    <Text style={styles.title}>Delivery . Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>New Delhi, DL</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>

            </View>
            <SearchBar />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 100,
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "green",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    bike: {
        width: 30,
        height: 30,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff',
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        color: Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft: 10,
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
});
export default CustomHeader
