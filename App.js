import {View, Text, Dimensions, ActivityIndicator, Alert, Linking} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: 'https://api.printnode.com/static/test/pdf/multipage.pdf',
        }}
        page={1}
        scale={1.0}
        minScale={0.5}
        maxScale={3.0}
        renderActivityIndicator={() => (
          <ActivityIndicator color="black" size="large" />
        )}
        enablePaging={true}
        onLoadProgress={(percentage) => console.log(`Loading :${percentage}`)}
        onLoadComplete={() => console.log('Loading Complete')}
        onPageChanged={(page, totalPages) => console.log(`${page}/${totalPages}`)}
        onError={(error) => console.log(error)}
        onPageSingleTap={(page) => alert(page)}
        onPressLink={(link) => Linking.openURL(link)}
        onScaleChanged={(scale) => console.log(scale)}
        // singlePage={true}
        spacing={10}
        // horizontal
        style={{flex: 1, width: Dimensions.get('window').width}}
      />
    </View>
  );
}
