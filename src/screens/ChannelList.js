import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const ChannelList = ({ navigation }) => {
    // const [channels, setChannels] = useState([]);
  
    // useEffect(() => {
    //   const unsubscribe = DB.collection('channels')
    //     .orderBy('createdAt', 'desc')
    //     .onSnapshot(snapshot => {
    //       const list = [];
    //       snapshot.forEach(doc => {
    //         list.push(doc.data());
    //       });
    //       setChannels(list);
    //     });
  
    //   return () => unsubscribe();
    // }, []);
  
    // const _handleItemPress = params => {
    //   navigation.navigate('Channel', params);
    // };
  
    return (
      <Container>
        {/* <FlatList
          keyExtractor={item => item['id']}
          data={channels}
          renderItem={({ item }) => (
            <Item item={item} onPress={_handleItemPress} />
          )}
          windowSize={3}
        /> */}
        <Text style={{ fontSize: 24 }}>Channel List</Text>
        <Button 
            title="Channel Creation"
            onPress={() => navigation.navigate('Channel Creation')}
        />
      </Container>
    );
  };
  
  export default ChannelList;