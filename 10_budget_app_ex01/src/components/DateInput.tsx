import React, {useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IDateInputProps {
  name: string;
  label?: string;
  error:
    | {
        message: string | undefined;
        ref: string | undefined;
        type: 'required';
      }
    | undefined;
  control: Control;
}

const DateInput: React.FC<IDateInputProps> = ({
  name,
  label,
  error,
  control,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Set State
  //   const setValueHandler = (val: string) => {
  //     setInputValue(val);
  //   };

  // Date Modal
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // On confirm date
  const handleConfirm = (date: Date) => {
    const dateFr = date.toLocaleDateString('fr-FR');
    console.log(dateFr);
    //   setValueHandler(dateFr);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Pressable onPress={showDatePicker}>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, value}}) => (
            <View style={styles.containerInput}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.input}>
                {value}
              </Text>
              <View style={styles.containerDate}>
                <Ionicons
                  name={'md-calendar-outline'}
                  color={'black'}
                  size={18}
                  style={styles.icon}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
          )}
          name={name}
        />
      </Pressable>
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 8,
  },
  containerInput: {
    position: 'relative',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 0,
    padding: 12,
  },
  containerDate: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
