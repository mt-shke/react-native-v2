import {View, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from './header/Header';
import LandingView from './components/LandingView';
import {colors} from '../../../globals';
import Transactions from './components/Transactions';
import ContainerButton from './components/ContainerButton';
import Gap from '../../../components/UI/Gap';
import moment from 'moment';
import PaymentItem from './components/payment/PaymentItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackScreenParamList} from '../../../navigation/HomeStack';
import {IUserData} from '../../../ts/interfaces/user';
import {getRandomUserData} from '../../../utils';

export type IHomeScreenProps = NativeStackScreenProps<
  HomeStackScreenParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<IHomeScreenProps> = ({navigation, route}) => {
  const loggedUser = route.params?.user;
  const randomUser = getRandomUserData();
  const [user, setUser] = useState<IUserData>(loggedUser ?? randomUser);

  const incomes = user.incomes;
  const expenses = user.expenses;
  const [firstname, lastname] = user.user;

  const returnPayment = (paymentArray: any) =>
    paymentArray.map((payment: any) => ({
      date: payment.date,
      amount: Number(payment.amount.replace('€', '').replace(',', '')),
      category: payment.category,
      comments: payment.comments,
      firstname: firstname,
      lastname: lastname,
    }));

  const incomesData = returnPayment(incomes);
  const expensesData = returnPayment(expenses);

  const orderedData = [...incomesData, ...expensesData].sort(
    (a, b) => moment(a.date).unix() - moment(b.date).unix(),
  );

  const reorderedData = [...orderedData].reverse();

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.containerFL}
        initialNumToRender={10}
        numColumns={1}
        // horizontal={true}
        data={reorderedData}
        ListHeaderComponent={
          <>
            <View style={styles.containerContent}>
              <LandingView user={{user}} />
              {/* <UsersList /> */}
              <ContainerButton />
            </View>
            <Gap height={30} />
            <Transactions />
            <Gap height={10} />
            <View style={styles.itemsTop} />
          </>
        }
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <PaymentItem payment={item} />
          </View>
        )}
        // ItemSeparatorComponent={({highlighted}) => (
        //   // <Gap height={20} backgroundColor={colors.white} />
        //   <View style={{backgroundColor: 'white', height: 20}} />
        // )}
        ListFooterComponent={<View style={styles.itemsBottom} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerContent: {
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    overflow: 'hidden',
  },
  containerFL: {
    backgroundColor: colors.transparent,
    // borderRadius: 12,
    // marginHorizontal: 12,
  },
  containerItem: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    // borderRadius: 12,
    // marginHorizontal: 12,
  },
  itemsTop: {
    height: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginHorizontal: 20,
  },
  itemsBottom: {
    height: 20,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginHorizontal: 20,
    marginBottom: 60,
  },
});
