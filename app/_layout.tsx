import CustomHeader from '../Components/CustomHeader';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { Platform, TouchableOpacity, useColorScheme, } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { TransitionPresets } from '@react-navigation/stack';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <BottomSheetModalProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{
            header: () => <CustomHeader />
          }} />

          <Stack.Screen name='(modal)/location-search' options={{
            presentation: 'modal', headerTitle: 'Select Location', headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: {
              backgroundColor: Colors.lightGrey,

            }, headerLeft: () => (
              <TouchableOpacity onPress={() => {
                navigation.goBack()
              }}>
                <Ionicons name='close' size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }} />

          <Stack.Screen name='(modal)/filter' options={{
            presentation: 'modal', headerTitle: 'Filter', headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: {
              backgroundColor: Colors.lightGrey,

            }, headerLeft: () => (
              <TouchableOpacity onPress={() => {
                navigation.goBack()
              }}>
                <Ionicons name='close' size={28} color={Colors.primary} />
              </TouchableOpacity>
            ), animation: 'slide_from_bottom'
          }} />
          <Stack.Screen
            name="(modal)/dish"
            options={{
              presentation: 'modal',
              headerTitle: '',
              headerTransparent: true,

              headerLeft: () => (
                <TouchableOpacity
                  style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Ionicons name="close-outline" size={28} color={Colors.primary} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="basket"
            options={{
              headerTitle: 'Basket',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Ionicons name="arrow-back" size={28} color={Colors.primary} />
                </TouchableOpacity>
              ),
            }}
          />

        </Stack>
    </ThemeProvider>
    </BottomSheetModalProvider>

  );
}
