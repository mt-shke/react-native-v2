import {UUID} from 'bson';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useQuery, useRealm} from '../../App';
import UserEmbedded from '../models/UserEmbedded';

const AuthEmbedded: React.FC = () => {
  const realm = useRealm();
  const usersEmbedded = useQuery(UserEmbedded);

  useEffect(() => {}, []);

  // return (
  //   <View>
  //     <Text>Loading a random user...</Text>
  //   </View>
  // );
  if (!usersEmbedded) {
    return (
      <View>
        <Text>Loading a random user...</Text>
      </View>
    );
  }

  // usersEmbedded

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          realm.write(() => {
            realm.create('UserEmbedded', UserEmbedded.createUser('Jean Paul'));
          });
        }}>
        <View style={styles.button}>
          <Text>Add new user ➕</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={usersEmbedded.sorted('_id')}
        // keyExtractor={item => (item._id.)toString()}
        renderItem={({item, index}) => {
          // const numOfBooks = Object.values(item.books)?.length;
          const numOfBooks = item.books?.length;
          console.log(numOfBooks);

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
                    realm.create(
                      UserEmbedded,
                      {
                        _id: item._id,
                        user: item.user,
                        books: [
                          ...item.books,
                          {
                            _id_book: new UUID(),
                            title:
                              'Le book de la Vallée de lodela' + numOfBooks,
                            pages: 62,
                          },
                        ],
                      },
                      'modified',
                    );
                  });
                }}>
                <View style={styles.button}>
                  <Text>Add new book ➕</Text>
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
                {item.books
                  ? item.books.map((book, i) => (
                      <View key={i}>
                        <Text>{`The user has ${book?.title}`}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            realm.write(() => {
                              realm.create(
                                UserEmbedded,
                                {
                                  _id: item._id,
                                  user: item.user,
                                  books: [
                                    ...item.books,
                                    {
                                      _id_book: book._id_book,
                                      title: book.title + ' Updated',
                                      pages: book.pages,
                                    },
                                  ],
                                },
                                'modified',
                              );
                            });
                          }}>
                          <View style={styles.update}>
                            <Text>{'Update book: ➕'}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            realm.write(() => {
                              realm.delete(book);
                            });
                          }}>
                          <View style={styles.deleteChild}>
                            <Text>{'🗑️'}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))
                  : 'The user has no book'}
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default AuthEmbedded;

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
