import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../../../../globals';
import data from '../../../../../../tpData.json';
import PaymentItem from './PaymentItem';
import Gap from '../../../../../components/UI/Gap';
import moment from 'moment';

const PaymentList: React.FC = () => {
  const incomes = data[0].incomes;
  const expenses = data[0].expenses;
  const firstname = data[0].user.split(' ')[0];
  const lastname = data[0].user.split(' ')[1];

  const returnPayment = paymentArray =>
    paymentArray.map(payment => ({
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
    (a, b) => moment(a.date) - moment(b.date),
  );

  const reorderedData = [...orderedData].reverse();

  // Using FlatList
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerFL}
        initialNumToRender={6}
        numColumns={1}
        // horizontal={true}
        data={reorderedData}
        renderItem={({item}) => <PaymentItem payment={item} />}
        ItemSeparatorComponent={() => <Gap height={20} />}
      />
    </View>
  );

  // Using arrayMapping
  // return (
  //   <View style={styles.container}>
  //     {reorderedData.map((income, index) => (
  //       <View key={index}>
  //         {index > 0 && <Gap height={20} />}
  //         <PaymentItem payment={income} />
  //       </View>
  //     ))}
  //   </View>
  // );
};

export default PaymentList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 40,
    // borderRadius: 12,
  },
  containerFL: {
    backgroundColor: colors.white,
    borderRadius: 12,
  },
});
