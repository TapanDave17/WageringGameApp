import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const GameScreen = () => {
  const [result, setResult] = useState('');
  const [balance, setBalance] = useState(100);

  const flipCoin = () => {
    const randomNumber = Math.random();
    const newResult = randomNumber > 0.5 ? 'Win' : 'Lose';
    const betAmount = 10;

    if (newResult === 'Win') {
      setBalance(balance + betAmount);
    } else {
      setBalance(balance - betAmount);
    }
    setResult(newResult);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Balance: ${balance}</Text>
      <Button title="Flip Coin" onPress={flipCoin} />
      {result ? <Text>{`You ${result}!`}</Text> : null}
    </View>
  );
};

export default GameScreen;
