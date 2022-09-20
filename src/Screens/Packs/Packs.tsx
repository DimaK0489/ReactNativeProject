import React from 'react';
import {useGetAllPacksQuery} from '../../Api/Packs';
import {FlatList, View, Text, SafeAreaView} from 'react-native';

const Packs = () => {
  const {data: packs} = useGetAllPacksQuery();

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  console.log(packs, 'Packs');
  return (
    <SafeAreaView>
      <FlatList
        data={packs}
        renderItem={({item}) => (
          <Item title={item.cardsPack.map(el => el.name)} />
        )}
      />
    </SafeAreaView>
  );
};

export default Packs;
