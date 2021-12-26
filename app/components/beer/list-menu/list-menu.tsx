import * as React from "react"
import { FlatList, Image, SafeAreaView, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../../theme"
import { Text } from "../../text/text"
import CheckBox from '@react-native-community/checkbox';
// import { Checkbox } from "../.."

// const CONTAINER: ViewStyle = {
//   justifyContent: "center",
// }

const TEXT: TextStyle = {
  flex: 1
}

export interface ListMenuProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ListMenu = observer(function ListMenu(props: ListMenuProps) {

  const [isSelected, setSelection] = React.useState(false);

  const renderItem = ({ item }) => (
    <TypeOfBeer item={item} isSelected={isSelected} setSelection={setSelection} />
  );

  return (
    <View style={TEXT}>
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal={false}
          data={DATA}
          style={styles.list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={{ backgroundColor: "Blue", flex: 0.1, flexDirection: 'row' }}>
        <View style={{
          flex: 3,
          borderWidth: 2,
          borderRadius: 6,
          borderColor: '#FFFFFF',
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          padding: 10
        }}>
          <Text style={{ fontSize: 10, textAlign: 'right', color: 'black' }}>Tổng thanh toán: <Text style={{ color: 'red' }}>$123</Text></Text>
        </View>
        <View style={{ flex: 1.5, borderWidth: 2, borderRadius: 6, borderColor: '#FFFFFF', justifyContent: 'center', backgroundColor: '#FF0000', }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#FFFFFF' }}>Mua Hàng(1)</Text>
        </View>
      </View>
    </View>
  )
})

const TypeOfBeer = ({ item, isSelected, setSelection }) => (
  <View style={styles.item}>
    <Image style={styles.itemImage} source={{ uri: item.image }}></Image>
    <View style={{
      flex: 1,
      marginTop: 2,
      marginLeft: 8
    }}><Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <CheckBox
        value={isSelected}
        onValueChange={() => setSelection(!isSelected)}
        style={styles.checkbox}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flex: 1,
    padding: 8
  },

  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    // borderWidth: 2,
    height: 130
  },
  itemTitle: {
    fontSize: 15,
    color: 'black'
  },

  itemPrice: {
    fontSize: 13,
    color: 'red',
    top: 10
  },

  itemImage: {
    width: 120,
    height: 110,
    resizeMode: 'center',
    alignSelf: 'center'
  },

  checkbox: {
    top: 10,
    color: 'balck',
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tiger lon',
    price: 12,
    image: "https://vn-test-11.slatic.net/p/e4dd332151974f38e80a78eddac21bb4.jpg_684x684q90.jpg"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tiger chai',
    price: 12,
    image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
  }
];
