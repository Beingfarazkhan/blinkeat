import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useMemo, forwardRef, useCallback, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors'
import Images from '@/constants/Images'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal


// const CustomBackground = ({ style }: any) => {
//     return (
//         <View style={[style, styles.container]}>
//             <ImageBackground
//                 source={require('@/assets/images/modal.jpeg')}
//                 style={styles.imageBackground}
//                 resizeMode="cover"
//             />
//         </View>
//     );
// };

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const [activeState, setActiveState] = useState("Delivery");
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) =>
        <BottomSheetBackdrop onPress={dismiss} {...props} appearsOnIndex={0} disappearsOnIndex={-1} />,
        []);
    const { dismiss } = useBottomSheetModal();

    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: Colors.primary }}
            // backgroundComponent={CustomBackground}
            overDragResistanceFactor={0}
        >

            <View style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={activeState === "Delivery" ? styles.toggleActive : styles.toggleInactive} onPress={() => setActiveState("Delivery")}>
                        <Text style={activeState === "Delivery" ? styles.activeText : styles.inactiveText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={activeState === "Pickup" ? styles.toggleActive : styles.toggleInactive} onPress={() => setActiveState("Pickup")}>
                        <Text style={activeState === "Pickup" ? styles.activeText : styles.inactiveText}>Pickup</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subheader}>Your Location</Text>
                <Link href={'/(modal)/location-search'} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name="location-outline" size={20} color={Colors.medium} />
                            <Text style={{ flex: 1 }}>Current location</Text>
                            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>
                </Link>

                <Text style={styles.subheader}>Arrival time</Text>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
                        <Text style={{ flex: 1 }}>Now</Text>
                        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetModal>
    );
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    imageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 500,
    },
    contentContainer: {
        flex: 1,
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32,
    },
    toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,

        borderRadius: 32,
        paddingHorizontal: 30,
    },
    activeText: {
        color: '#fff',
        fontWeight: '700',
    },
    toggleInactive: {
        backgroundColor: "#fff",
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 32,
        paddingHorizontal: 30,
    },
    inactiveText: {
        color: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        margin: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 16,
        fontWeight: '600',
        margin: 16,
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1,
    },
});


export default BottomSheet