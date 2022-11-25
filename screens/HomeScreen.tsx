import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { View } from '../components/Themed';
import React from 'react';
import { RootTabScreenProps } from '../types';
import Moq from '../constants/MoqData';
import { useState } from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { MainItem } from '../components/MainItem';
import { SearchForm } from '../components/SearchForm';

const defaultItem = { id: 0, title: 'Snj', value: 36.6 };
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  // DEBUG
  const data = Moq;
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  const searchFormHandler = ({ value }: { value: string }) => {
    console.log('searchHandler', { value });
  };

  return (
    <View style={styles.container}>


      <View style={styles.searchContainer}>
        <SearchForm searchHandler={searchFormHandler} />
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity>
          <MainItem item={selectedItem} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.favoritesListContainer}>
        {data.FavoriteData.map((item) => {
          const itemKey = `${item.id}-${item.title}`;
          return (
            <FavoriteItem
              item={item}
              key={itemKey}
              clickHandler={setSelectedItem}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  favoritesListContainer: {
    flex: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '95%',
  },
  searchContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 40,
    fontSize: 60,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 45,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
