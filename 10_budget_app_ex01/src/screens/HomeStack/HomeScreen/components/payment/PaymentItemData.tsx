import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../globals';
import {incomesCategory} from '../../../../../schema/payment';
import {IPayment} from '../../../../../ts/interfaces';

export interface IPaymentItemDataProps {
  payment: IPayment;
}

const PaymentItemData: React.FC<IPaymentItemDataProps> = ({payment}) => {
  const isIncome = incomesCategory.some(inc => inc === payment.category);

  const paymentStyle = {
    ...styles.amount,
    color: isIncome ? colors.green : colors.orange,
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCategory}>
        <Text style={styles.category}>{payment.category}</Text>
        <Text style={styles.date}>
          {moment(payment.date).format('MMM Do YY')}
        </Text>
      </View>
      <View style={styles.containerAmount}>
        <Text style={paymentStyle}>{payment.amount}€</Text>
      </View>
    </View>
  );
};

export default PaymentItemData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  containerCategory: {
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerAmount: {
    justifyContent: 'center',
  },
  date: {
    fontSize: 12,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
