import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './style';

const Detail = ({ route }) => {
  const { code } = route.params;
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const fetchData = () => {
    setLoading(true);
    axios.get('https://www.nosyapi.com/apiv2/economy/getCurrencyDetails?code=' + code, {
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

  const renderItem = ({ item }) => {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.code} / {item.ShortName}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title}> Alış Fiyatı: {item.buying}</Text>
          <Text style={styles.title}> Satış Fiyaı: {item.selling}</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.title}> Bugün En Düşük: {item.dayMin}</Text>
          <View style={styles.row}>

            <Image style={styles.Max} source={require("../../assets/Max.png")} />
            <Text style={styles.title}> Bugün En Yüksek: {item.dayMax}</Text>
          </View>
        </View>
      </View>

    )
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}
export default Detail;