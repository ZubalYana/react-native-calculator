import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [inputedData, setInputedData] = useState('');
  const operators = ['+', '-', '×', '÷', '*', '/'];
  const scrollRef = useRef(null);

  const handlePress = (value) => {
    setInputedData((prev) => {
      if (operators.includes(value)) {
        if (operators.includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value;
        }
      }

      if (value === '.') {
        const parts = prev.split(/[\+\-\×\÷\*\/]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes('.')) {
          return prev;
        }
      }

      return prev + value;
    });
  };
  const calculate = () => {
    try {
      let expression = inputedData
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/,/g, '.');

      expression = handlePercentage(expression);

      let result = eval(expression);
      result = parseFloat(result.toFixed(10));

      setInputedData(result.toString());
      console.log(expression, "=", result);
    } catch (e) {
      console.log("Invalid expression", e);
    }
  };
  const handlePercentage = (expr) => {
    expr = expr.replace(/(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)%/g, (match, leftNum, _, operator, rightNum) => {
      leftNum = parseFloat(leftNum);
      rightNum = parseFloat(rightNum);

      switch (operator) {
        case '+':
          return `${leftNum}+(${leftNum}*${rightNum}/100)`;
        case '-':
          return `${leftNum}-(${leftNum}*${rightNum}/100)`;
        case '*':
          return `${leftNum}*(${rightNum}/100)`;
        case '/':
          return `${leftNum}/(${rightNum}/100)`;
        default:
          return match;
      }
    });

    expr = expr.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
      return `(${parseFloat(num)}/100)`;
    });

    return expr;
  };
  const toggleSign = () => {
    setInputedData((prev) => {
      if (prev === "") return prev;

      const parts = prev.split(/([+\-×÷*/])/);
      const lastPart = parts[parts.length - 1];

      if (!lastPart) return prev;

      if (lastPart.startsWith('-')) {
        parts[parts.length - 1] = lastPart.slice(1);
      } else {
        parts[parts.length - 1] = '-' + lastPart;
      }

      return parts.join('');
    });
  };
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: false });
    }
  }, [inputedData]);
  const setFontSize = (length) => {
    if (length < 10) {
      return 78
    } else {
      return 64
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.burgerContainer}>
        <View style={styles.burgerRow}>
          <View style={styles.burgerDot}></View>
          <View style={styles.burgerLine}></View>
        </View>
        <View style={styles.burgerRow}>
          <View style={styles.burgerDot}></View>
          <View style={styles.burgerLine}></View>
        </View>
        <View style={styles.burgerRow}>
          <View style={styles.burgerDot}></View>
          <View style={styles.burgerLine}></View>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.inputScroll}
          contentContainerStyle={styles.inputContainer}
        >
          <TextInput
            style={[styles.input, { fontSize: setFontSize(inputedData.length) }]}
            placeholder="0"
            placeholderTextColor="#FDFDFD"
            value={inputedData}
            onChangeText={setInputedData}
            multiline={false}
          />
        </ScrollView>
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.leftShadow}
          pointerEvents="none"
        />
      </View>

      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => {
              setInputedData(inputedData.slice(0, -1))
              console.log(inputedData)
            }}
            onLongPress={() => {
              setInputedData('')
              console.log(inputedData)
            }}
          >
            {inputedData.length === 0 ? <Text style={{ color: 'white', fontSize: 38 }}>AC</Text> : <Image
              source={require('./assets/backspace.png')}
              style={{ width: 43, height: 35, resizeMode: 'stretch' }}
            />}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => {
              toggleSign()
              console.log(inputedData)
            }}
          >
            <View style={{ ...styles.plusMinusBtnContainer }}>
              <Text style={{ color: 'white', fontSize: 24, position: 'absolute', left: '32%', top: '22%' }}>+</Text>
              <Text style={{ color: 'white', fontSize: 38, position: 'absolute', left: '45%', top: '21%', transform: [{ rotate: '28deg' }] }}>/</Text>
              <Text style={{ color: 'white', fontSize: 32, position: 'absolute', right: '32%', top: '35%' }}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => {
              handlePress('%')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              handlePress('÷')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 60, marginBottom: 9, marginLeft: 3 }}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('7')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('8')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('9')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              handlePress('×')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 52, marginBottom: 6 }}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('4')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('5')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('6')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: 'orange' }}
            onPress={() => {
              handlePress('-')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 52, marginBottom: 6 }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('1')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('2')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('3')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              handlePress('+')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 52, marginBottom: 6 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => console.log('Click')}
          >
            <Image
              source={require('./assets/calculator-svgrepo-com.png')}
              style={{ width: 29, height: 42, resizeMode: 'stretch' }}
            />

          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress('0')
              console.log(inputedData);
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              handlePress(',')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => calculate()}
          >
            <Text style={{ color: 'white', fontSize: 52, marginBottom: 6 }}>=</Text>
          </TouchableOpacity>
        </View>
      </View >
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 12,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },

  leftShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 20,
  },
  inputContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 82,
    color: '#FDFDFD',
    textAlign: 'right',
    marginBottom: 50,
  },
  inputPlaceholder: {
    color: '#ffffff',
  },
  button: {
    width: 98,
    height: 91,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsRowContainer: {
    bottom: 55,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 9,
  },
  plusMinusBtnContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  burgerDot: {
    width: 3,
    height: 3,
    borderRadius: 50,
    backgroundColor: '#FF9F0A',
  },
  burgerLine: {
    width: 18,
    height: 2,
    backgroundColor: '#FF9F0A',
  },
  burgerRow: {
    flexDirection: 'row',
    gap: 3,
  },
  burgerContainer: {
    position: 'absolute',
    top: 70,
    left: 20,
    flexDirection: 'column',
    gap: 4
  }
});
