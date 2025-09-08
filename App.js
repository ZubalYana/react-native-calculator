import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [inputedData, setInputedData] = useState('');

  const calculate = () => {
    setInputedData(eval(inputedData).toString())
    console.log(inputedData)
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

      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#FDFDFD"
        value={inputedData}
        onChangeText={setInputedData}
      />
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => {
              setInputedData('')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => console.log('Click')}
          >
            <View style={{ ...styles.plusMinusBtnContainer }}>
              <Text style={{ color: 'white', fontSize: 24, position: 'absolute', left: '32%', top: '22%' }}>+</Text>
              <Text style={{ color: 'white', fontSize: 38, position: 'absolute', left: '45%', top: '21%', transform: [{ rotate: '17deg' }] }}>/</Text>
              <Text style={{ color: 'white', fontSize: 32, position: 'absolute', right: '32%', top: '35%' }}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#5C5C5E' }}
            onPress={() => {
              setInputedData(inputedData + '%')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              setInputedData(inputedData + '÷')
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
              setInputedData(inputedData + '7')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '8')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '9')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              setInputedData(inputedData + '×')
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
              setInputedData(inputedData + '4')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '5')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '6')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: 'orange' }}
            onPress={() => {
              setInputedData(inputedData + '-')
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
              setInputedData(inputedData + '1')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '2')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + '3')
              console.log(inputedData)
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF9F0A' }}
            onPress={() => {
              setInputedData(inputedData + '+')
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
            value="0"
            onPress={() => {
              setInputedData(inputedData + '0');
              console.log(inputedData);
            }}
          >
            <Text style={{ color: 'white', fontSize: 38 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#2B2B2D' }}
            onPress={() => {
              setInputedData(inputedData + ',')
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,

  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    height: 82,
    color: '#FDFDFD',
    fontSize: 78,
    textAlign: 'right',
    marginBottom: 4,
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
    // flexDirection: 'column',
    // position: 'absolute',
    // bottom: 10,
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
