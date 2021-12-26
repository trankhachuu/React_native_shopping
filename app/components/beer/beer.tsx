import { observer } from "mobx-react-lite"
import * as React from "react"
import { Image, SafeAreaView, StatusBar, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";

const TEXT: TextStyle = {
  flex: 1
}
export interface BeerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Beer = observer(function Beer(props: BeerProps) {

  const renderItem = ({ item }) => (
    <TypeOfBeer item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={TEXT}>
        <Image style={{ flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'flex-start' }} source={{ uri: "https://bizweb.dktcdn.net/thumb/1024x1024/100/361/770/products/bia-tiger-lon-330ml.jpg?v=1573874423947" }}></Image>
      </View>
      <View style={{ flex: 1, top: 10 }}>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, }}>
          <View style={{ flexDirection: 'row' }}><MaterialCommunityIcons style={{ top: 3 }} name="subtitles-outline" size={24} color="black" />
            <Text style={{ fontSize: 20, color: 'black', fontFamily: "Cochin" }}> Bia Tiger</Text></View>
          <View style={{ top: 4 }}><Text style={{ color: "red" }}>$220</Text></View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: 'row', flex: 0.3, paddingLeft: 20, paddingRight: 20 }}><AntDesign style={{ top: 5 }} name="menu-fold" size={18} color="black" />
            <Text style={{ fontSize: 20, color: 'black', fontFamily: "Cochin" }}> Chọn loại bia</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, marginBottom: 13, marginHorizontal: 10 }}>
            <SafeAreaView style={styles.containerSafe}>
              <FlatList
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.buttom}>
          <View style={styles.itemButtom}><AntDesign name="message1" size={24} color="black" /></View>
          <View style={styles.itemButtom}><AntDesign name="shoppingcart" size={24} color="black" /></View>
          <View style={styles.itemButtom}><Text style={{ color: 'red' }}>Mua Ngay</Text></View>
        </View>
      </View>
    </View>
  )
})

const TypeOfBeer = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Image style={styles.itemImage} source={{ uri: item.image }}></Image>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerSafe: {
    flex: 1,
  },

  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 70
  },
  itemTitle: {
    fontSize: 10,
    textAlign: 'center'
  },

  itemImage: {
    width: '100%',
    height: 70,
    top: 10,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },

  buttom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  itemButtom: {
    flex: 1,
    borderWidth: 1,
    height: '80%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white'
  }
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tiger lon',
    image: "https://vn-test-11.slatic.net/p/e4dd332151974f38e80a78eddac21bb4.jpg_684x684q90.jpg"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tiger chai',
    image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
  }
];