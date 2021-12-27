
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { BeerModel } from "../model/beer-model";

export interface BeerMenuItemProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>
    item?: BeerModel
}

/**
 * Describe your component here
 */
export const BeerMenuItem = observer(function BeerMenuItem(props: BeerMenuItemProps) {
    const {
        item,
    } = props

    const navigation = useNavigation();

    const _chooseBeer = (item) => {
        navigation.navigate('beer', {
            item: item,
        });
    };

    return (
        <TouchableOpacity style={styles.itemFlatList} onPress={() => _chooseBeer(item)}>
            <Image style={{ width: '100%', height: 90, resizeMode: 'contain', alignSelf: 'flex-start' }} source={{ uri: item.image }}></Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flex: 1,
                top: 15
            }}>
                <View style={{ flex: 1 }}><Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                }}>${item.price}</Text></View>
                <View style={{ flex: 1, top: 6 }}><Text style={{
                    fontSize: 10,
                    textAlign: 'center',
                }}>quantily: {item.quantily}</Text></View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    itemFlatList: {
        width: "46.5%",
        height: 160,
        marginHorizontal: 7,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 32,
    },
});
