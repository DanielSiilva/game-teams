import {StatusBar} from 'react-native'
import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme/index';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import {Players} from '@screens/Players'
import {Loading} from '@components/Loading'


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Players /> : <Loading />}
      </>
    </ThemeProvider>
   
  );
}


