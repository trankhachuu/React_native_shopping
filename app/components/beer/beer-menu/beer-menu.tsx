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

  const {
  } = props

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
    name: "Bia tiger",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/361/770/products/bia-tiger-lon-330ml.jpg?v=1573874423947",
    description: "Bia tiger",
    price: 150,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia tiger lon',
      image: "https://vn-test-11.slatic.net/p/e4dd332151974f38e80a78eddac21bb4.jpg_684x684q90.jpg"
    },
    {
      id: 2,
      title: 'Bia tiger chai',
      image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
    }]
  }
  ,
  {
    key: "2",
    name: "Bia budweiser",
    image: "https://winehamper.vn/wp-content/uploads/2020/03/BEER-budweiser-2.jpg",
    description: "Bia budweiser",
    price: 180,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia budweiser lon',
      image: "https://winehamper.vn/wp-content/uploads/2020/03/BEER-budweiser-2.jpg"
    },
    {
      id: 2,
      title: 'Bia budweiser chai',
      image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/bia-budweiser-chai-nho%CC%82m.png"
    }]
  },
  {
    key: "3",
    name: "Bia corona",
    image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/bia-corona-extra-tphcm-300x300.png",
    description: "bia corona",
    price: 180,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia corona lon',
      image: "https://bizweb.dktcdn.net/100/419/466/products/b3a8a7f3-9e34-4819-84c1-e95ddf00f411.jpg?v=1616410262630"
    },
    {
      id: 2,
      title: 'Bia corona chai',
      image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/bia-corona-extra-tphcm-300x300.png"
    }]
  },
  {
    key: "4",
    name: "Bia laru",
    image: "https://cdn.tgdd.vn/Files/2019/11/12/1218211/bia-larue-la-bia-gi-co-ngon-khong-gia-thanh-nong-do-con-the-nao-201911122206538107.jpg",
    description: "bia laru",
    price: 150,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia laru lon',
      image: "https://cooponline.vn/wp-content/uploads/2021/10/bia-larue-xanh-lon-330ml.jpg"
    },
    {
      id: 2,
      title: 'Bia laru chai',
      image: "https://cdn.tgdd.vn/Files/2019/11/12/1218211/bia-larue-la-bia-gi-co-ngon-khong-gia-thanh-nong-do-con-the-nao-201911122206538107.jpg"
    }]
  },
  {
    key: "5",
    name: "Bia sai gon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwj2NVTpjQkbZ1LoQ3Us3AWMbx4R8oNQvjyLd71QwZFIgkJcJbOEdMHGRhxoNQSePwZA&usqp=CAU",
    description: "Bia sai gon",
    price: 180,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia sai gon lon',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwj2NVTpjQkbZ1LoQ3Us3AWMbx4R8oNQvjyLd71QwZFIgkJcJbOEdMHGRhxoNQSePwZA&usqp=CAU"
    },
    {
      id: 2,
      title: 'Bia sai gon chai',
      image: "https://bizweb.dktcdn.net/thumb/large/100/036/299/products/bia-tiger-bac-chai.jpg"
    }]
  },
  {
    key: "5",
    name: "Bia Maeloc",
    image: "https://douongnhapkhau.com/wp-content/uploads/2020/08/maeloc-dau.jpg",
    description: "Bia Maeloc",
    price: 150,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia Maeloc lon',
      image: "https://sieuthibianhap.vn/wp-content/uploads/2020/10/BIa-Atlas-Mega-Strong-16.jpg"
    },
    {
      id: 2,
      title: 'Bia Maeloc chai',
      image: "https://douongnhapkhau.com/wp-content/uploads/2020/08/maeloc-dau.jpg"
    }]
  },
  {
    key: "6",
    name: "Bia heineken",
    image: "https://bizweb.dktcdn.net/100/364/464/products/bia-heniken-lon-jpeg.jpg?v=1596620476327",
    description: "bia heineken",
    price: 180,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia heineken lon',
      image: "https://bizweb.dktcdn.net/100/364/464/products/bia-heniken-lon-jpeg.jpg?v=1596620476327"
    },
    {
      id: 2,
      title: 'Bia heineken chai',
      image: "http://img.websosanh.vn/v2/users/root_product/images/bia-heineken-chai-250ml/jKta9qJ1IzfS.jpg"
    }]
  },
  {
    key: "7",
    name: "Bia 333",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DtEJc17WsmJH9mscgfazRMT6oje8I6mJhWSNjnRTG4vW0e_AnpIhSXIHUQKxM_ajfTE&usqp=CAU",
    description: "bia 333",
    price: 150,
    quantily: 12,
    beerItem: [{
      id: 1,
      title: 'Bia 333 lon',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DtEJc17WsmJH9mscgfazRMT6oje8I6mJhWSNjnRTG4vW0e_AnpIhSXIHUQKxM_ajfTE&usqp=CAU"
    },
    {
      id: 2,
      title: 'Bia 333 chai',
      image: "https://maydochuyendung.com/img/uploads/images/khuc-xa-ke/333-CHAI.jpg"
    }]
  }
]