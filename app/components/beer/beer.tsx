import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Image, SafeAreaView, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BeerModel } from './model/beer-model';
import { BeerOrder } from './model/beer-order';

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

  const beerOrder = new BeerOrder();
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState([true, false])
  const route = useRoute();

  const beer: BeerModel = route.params && route.params.item ? route.params.item : new BeerModel as BeerModel;
  // mapping beer to beerOrder
  beerOrder.description = beer.description;
  beerOrder.price = beer.price;
  beerOrder.quantily = 1;
  beerOrder.name = beer.name;
  beerOrder.image = beer.beerItem ? beer.beerItem[0].image : beer.image;
  beerOrder.typeBeer = beer.beerItem ? beer.beerItem[0].id : 0;
  beerOrder.title = beer.beerItem ? beer.beerItem[0].title : "";

  // console.debug(beer);

  const _chooseBeer = (item) => {
    beer.beerItem.forEach((e, i) => {
      if (e.id === item.id) {
        selected[i] = true;
      } else {
        selected[i] = false;
      }
    })

    setSelected([...selected])
    beerOrder.image = item.image;
    beerOrder.typeBeer = item.id;
    beerOrder.title = item.title;
  };

  const _addShoppingCart = (order) => {
    navigation.navigate('listMenu', {
      order: order,
    });
  }

  return (
    <View style={styles.container}>
      <View style={TEXT}>
        <Image style={{ flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'flex-start' }} source={{ uri: beer.image }}></Image>
      </View>
      <View style={{ flex: 1, top: 10 }}>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, }}>
          <View style={{ flexDirection: 'row' }}><MaterialCommunityIcons style={{ top: 3 }} name="subtitles-outline" size={24} color="black" />
            <Text style={{ fontSize: 20, color: 'black', fontFamily: "Cochin" }}> {beer.description}</Text></View>
          <View style={{ top: 4 }}><Text style={{ color: "red" }}>${beer.price}</Text></View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: 'row', flex: 0.3, paddingLeft: 20, paddingRight: 20 }}><AntDesign style={{ top: 5 }} name="menu-fold" size={18} color="black" />
            <Text style={{ fontSize: 20, color: 'black', fontFamily: "Cochin" }}> Chọn loại bia</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, marginBottom: 13, marginHorizontal: 10 }}>
            <SafeAreaView style={styles.containerSafe}>
              <FlatList
                horizontal={true}
                data={beer.beerItem}
                renderItem={({ item, index }) => (

                  <TouchableOpacity style={styles.item} onPress={() => _chooseBeer(item)}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}><Text style={styles.itemTitle}>{item.title}</Text></View>
                    <Image style={[styles.itemImage, { borderColor: selected[index] ? 'red' : 'white' }]} source={{ uri: item.image }}></Image>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.buttom}>
          <View style={styles.itemButtom}><AntDesign name="message1" size={24} color="black" /></View>
          <TouchableOpacity onPress={() => _addShoppingCart(beerOrder)} style={styles.itemButtom}><AntDesign name="shoppingcart" size={24} color="black" /></TouchableOpacity>
          <View style={[styles.itemButtom]}><Text style={{ color: 'red' }}>Mua Ngay</Text></View>
        </View>
      </View>
    </View>
  )
})

// const TypeOfBeer = ({ item }) => (
//   <TouchableOpacity style={styles.item} onPress={() => _chooseBeer(item)}>
//     <View style={{ flex: 1, justifyContent: 'flex-end' }}><Text style={styles.itemTitle}>{item.title}</Text></View>
//     <Image style={styles.itemImage} source={{ uri: item.image }}></Image>
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({
  container: {
    ...TEXT,
  },

  containerSafe: {
    ...TEXT,
  },

  item: {
    ...TEXT,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 70,
  },
  itemTitle: {
    fontSize: 10,
    textAlign: 'center'
  },

  itemImage: {
    width: '100%',
    height: 70,
    top: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    // borderColor: 'red',
  },

  buttom: {
    ...TEXT,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  itemButtom: {
    ...TEXT,
    borderWidth: 1,
    height: '80%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white'
  }
});

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Tiger lon',
//     image: "https://vn-test-11.slatic.net/p/e4dd332151974f38e80a78eddac21bb4.jpg_684x684q90.jpg"
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Tiger chai',
//     image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
//   }
// ];