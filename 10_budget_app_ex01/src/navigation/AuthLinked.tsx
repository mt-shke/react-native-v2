import {UUID} from 'bson';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useQuery, useRealm} from '../../App';
import UserLinked from '../models/UserLinkingObjects';

const AuthLinked: React.FC = () => {
  const realm = useRealm();
  const userLinked = useQuery(UserLinked);

  useEffect(() => {}, []);

  // return (
  //   <View>
  //     <Text>Loading a random user...</Text>
  //   </View>
  // );
  if (!userLinked) {
    return (
      <View>
        <Text>Loading a random user...</Text>
      </View>
    );
  }

  // userLinked

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          realm.write(() => {
            realm.create('UserLinked', UserLinked.createUser('Jean Paul'));
          });
        }}>
        <View style={styles.button}>
          <Text>Add new user ➕</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={userLinked.sorted('_id')}
        // keyExtractor={item => (item._id.)toString()}
        renderItem={({item, index}) => {
          // const numOfBooks = Object.values(item.books)?.length;
          //   const numOfBooks = item.books?.length;
          //   console.log(numOfBooks);

          return (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Text style={{paddingHorizontal: 10}}>{item.user}</Text>

              <TouchableOpacity
                onPress={() => {
                  realm.write(() => {
                    // realm.create(
                    //   UserLinked,
                    //   {
                    //     _id: item._id,
                    //     user: item.user,
                    //     children: [
                    //       ...item.children,
                    //       {
                    //         _id_children: new UUID(),
                    //         text: 'Ed',
                    //         age: Math.floor(Math.random() * 20 + 1),
                    //       },
                    //     ],
                    //   },
                    //   'modified',
                    // );
                    // const newChild = {
                    //   _id_children: new UUID(),
                    //   text: 'Ed',
                    //   age: Math.floor(Math.random() * 20 + 1),
                    // };
                    // item.children = item.children.push(newChild);
                  });
                }}>
                <View style={styles.button}>
                  <Text>Add new child ➕</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  realm.write(() => {
                    realm.delete(item);
                  });
                }}>
                <Text>{'🗑️'}</Text>
              </TouchableOpacity>

              <View style={styles.button}>
                {item.children
                  ? item.children.map((child, i) => {
                      //   const childTarget = realm
                      //     .objects('Children')
                      //     .filtered(`_id_children = ${child._id_children}`);
                      //   console.log(childTarget);

                      return (
                        <View key={i}>
                          <Text>{`The user's child is ${child?.text} and his age is ${child?.age}`}</Text>

                          <TouchableOpacity
                            onPress={() => {
                              realm.write(() => {
                                // childTarget.text
                              });
                            }}>
                            <View style={styles.update}>
                              <Text>{'Update child: ➕'}</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              realm.write(() => {
                                realm.delete(childTarget);
                              });
                            }}>
                            <View style={styles.deleteChild}>
                              <Text>{'🗑️'}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })
                  : 'The user has no child'}
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default AuthLinked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: 'orange',
  },
  update: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginBottom: 20,
  },
  deleteChild: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
