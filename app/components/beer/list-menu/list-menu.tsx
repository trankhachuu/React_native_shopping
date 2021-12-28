import CheckBox from '@react-native-community/checkbox'
import { observer } from "mobx-react-lite"
import * as React from "react"
import { FlatList, Image, Pressable, SafeAreaView, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { useStores } from '../../../models'
import { Text } from "../../text/text"
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
  const { cartStore } = useStores();

  // const [isSelected, setSelection] = React.useState([]);
  const [carts, setCarts] = React.useState(cartStore.cartBeers);
  const [countProps, setCountProps] = React.useState([]);
  const [isSelected, setSelection] = React.useState([]);

  // let array = []
  React.useEffect(() => {
    // console.log('init data')
    if (carts && carts.length > 0) {
      const arr = []
      const counts = []
      carts.forEach((e, i) => {
        arr.push(false)
        counts.push(e.quantily)
        // array.push(false);
      })
      setSelection([...arr])
      setCountProps([...counts])
    }
  }, []);

  const renderItem = ({ item, index }) => (
    <TypeOfBeer item={item}
      index={index}
      isSelected={isSelected}
      setSelection={setSelection}
      setCountProps={setCountProps}
      countProps={countProps} />
  );

  return (
    <View style={TEXT}>
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal={false}
          data={carts}
          style={styles.list}
          renderItem={renderItem}
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

const TypeOfBeer = ({ item, index, isSelected, setSelection, setCountProps, countProps }) => {

  const valueChange = () => {
    isSelected[index] = !isSelected[index];
    const arr = [...isSelected];
    const check = arr[index] ? true : false;
    arr[index] = check;
    setSelection([...arr])
  }

  const valuePlus = () => {
    const arr = [...countProps];
    const count = arr[index];
    arr[index] = (count + 1);
    setCountProps([...arr])
  }

  const valueMinus = () => {
    const arr = [...countProps];
    let count = arr[index];
    if (count <= 0) {
      count = 1;
    }
    arr[index] = count - 1;
    setCountProps([...arr])
  }

  React.useEffect(() => {
    console.log("countProps[index]" + countProps[index])
  }, []);

  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{ uri: item.image }}></Image>
      <View style={{
        flex: 1,
        marginTop: 2,
        marginLeft: 8
      }}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Pressable style={styles.button} onPress={valuePlus}>
            <Text style={styles.text}>+</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>{countProps[index]}</Text></Pressable>
          <Pressable style={styles.button} onPress={valueMinus}>
            <Text style={styles.text}>-</Text>
          </Pressable>
          <View style={{ flex: 3 }}></View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <CheckBox
            value={isSelected[index]}
            onChange={valueChange}
          />
        </View>
      </View>
    </View>
  )
};

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
    height: 130
  },
  itemTitle: {
    fontSize: 15,
    color: 'black'
  },

  itemPrice: {
    fontSize: 13,
    color: 'red',
  },

  itemImage: {
    width: 120,
    height: 110,
    resizeMode: 'center',
    alignSelf: 'center'
  },

  itemCheckbox: {
    color: 'balck',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center'
  },
});

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Tiger lon',
//     price: 12,
//     image: "https://vn-test-11.slatic.net/p/e4dd332151974f38e80a78eddac21bb4.jpg_684x684q90.jpg"
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Tiger chai',
//     price: 12,
//     image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
//   }
// ];
