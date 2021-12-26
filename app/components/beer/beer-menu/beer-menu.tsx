import { observer } from "mobx-react-lite"
import * as React from "react"
import { FlatList, SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { BeerMenuItem } from "./beer-menu-item"

export interface BeerMenuProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BeerMenu = observer(function BeerMenu(props: BeerMenuProps) {

  const renderItem = ({ item }) => (
    <BeerMenuItem item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flatListData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: StatusBar.currentHeight || 0,
    ackgroundColor: "#EEEEEE",
    justifyContent: 'center',
    alignItems: 'center',// căn giữa cho các item trên màn hình
  }
});

const flatListData = [
  {
    key: "1",
    name: "bia tiger",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/361/770/products/bia-tiger-lon-330ml.jpg?v=1573874423947",
    description: "bia tiger",
    price: 150,
    quantily: 12,
  }
  ,
  {
    key: "2",
    name: "budweiser",
    image: "https://winehamper.vn/wp-content/uploads/2020/03/BEER-budweiser-2.jpg",
    description: "budweiser",
    price: 180,
    quantily: 12,
  },
  {
    key: "3",
    name: "bia corona",
    image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/bia-corona-extra-tphcm-300x300.png",
    description: "bia corona",
    price: 180,
    quantily: 12,
  },
  {
    key: "4",
    name: "bia laru",
    image: "https://cdn.tgdd.vn/Files/2019/11/12/1218211/bia-larue-la-bia-gi-co-ngon-khong-gia-thanh-nong-do-con-the-nao-201911122206538107.jpg",
    description: "bia laru",
    price: 150,
    quantily: 12,
  },
  {
    key: "5",
    name: "bia sai gon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwj2NVTpjQkbZ1LoQ3Us3AWMbx4R8oNQvjyLd71QwZFIgkJcJbOEdMHGRhxoNQSePwZA&usqp=CAU",
    description: "bia sai gon",
    price: 180,
    quantily: 12,
  },
  {
    key: "5",
    name: "Bia Maeloc",
    image: "https://douongnhapkhau.com/wp-content/uploads/2020/08/maeloc-dau.jpg",
    description: "Bia Maeloc",
    price: 150,
    quantily: 12,
  },
  {
    key: "6",
    name: "bia heineken",
    image: "https://cdn.vatgia.vn/pictures/thumb/0x0/2010/11/ooc1289036058.jpg",
    description: "bia heineken",
    price: 180,
    quantily: 12,
  },
  {
    key: "7",
    name: "bia 333",
    image: "https://cdn.vatgia.vn/pictures/thumb/320x320/2007/07/bzb1183807853.jpg",
    description: "bia 333",
    price: 150,
    quantily: 12,
  }
]