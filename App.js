import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

  const number = (Math.floor(Math .random() * 100) + 1);
  var count=0;

export default function App() {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('Guess a number between 1-100');

  //const onChangeText={text=> setText(text)};
  const buttonPressedGuess= () => {
    setGuess('');
    count=count+1;
    if (guess>number){
      setFeedback('Your guess '+ guess + ' is too high.');
    }
    else if (guess==number){
      setFeedback('CORRECT!');
      Alert.alert('You guessed the number in '+ count +' guesses!');
    }
    else {
      setFeedback('Your guess '+ guess + ' is too low.');
    }

  };
  //const buttonPressedGuess= () => {setFeedback('Your guess '+ guess);}

  return (
    <View style={styles.container}>
     <Text style={{marginBottom:10}}></Text>
     <Text style={{marginBottom:10}}>{feedback}</Text>
      <TextInput
        keyboardType="number-pad"
        style ={{width:50 , borderColor:'#333', borderWidth:1, marginBottom:15}}
        onChangeText={guess =>  setGuess(guess)}
        value={guess}
        />

    <View style={styles.row}>
        <Button onPress= {buttonPressedGuess}title="MAKE GUESS"/>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //width:150,
  },

});

//props keyboardType numeric
