import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState();

    const navigation = useNavigation();

    const fetchData = () => {
        setLoading(true);
        axios.get('https://www.nosyapi.com/apiv2/economy/getCurrencyList', {
            headers: {
                'Authorization': 'Bearer vbWGkbbqlvSiGQvhPhH2hega1hyDUzA9IlSFFi5fM8v7Fuyxqa0Mjce9p1Eg'
            }
        })
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const NavigateToDetail = (item) => {
        navigation.navigate("Detail" , {code:item.code})
    }

    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity style={styles.container} onPress={() => NavigateToDetail(item)}>
                <Text style={styles.title}>{item.code}</Text>
                <Text style={styles.shortName}>{item.ShortName}</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.fullName}>{item.FullName}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderItem} />
        </View>
    )
}

export default Home;