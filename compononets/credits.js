import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const Credits = ({ setSubject_Credit, subject_credit }) => {
  return (
    <View>
        <View style={styles.radioGroup}> 
        <Text>CREDIT </Text>
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option1"
                  status={subject_credit === '1' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Credit('1')} 
                  color="green"
              /> 
              <Text style={styles.radioLabel}> 
                  1 
              </Text> 
          </View> 

          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option2"
                  status={subject_credit === '2' ?  
                            'checked' : 'unchecked'} 
                  onPress={() => setSubject_Credit('2')} 
                  color="lime"
              /> 
              <Text style={styles.radioLabel}> 
                  2 
              </Text> 
          </View> 
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option3"
                  status={subject_credit === '3' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Credit('3')} 
                  color="pink"
              /> 
              <Text style={styles.radioLabel}> 
                  3 
              </Text> 
          </View>
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option3"
                  status={subject_credit === '4' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Credit('4')} 
                  color="orange"
              /> 
              <Text style={styles.radioLabel}> 
                  4 
              </Text> 
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#F5F5F5', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: 5, 
        borderRadius: 8, 
        backgroundColor: 'white', 
        padding: 10, 
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { 
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 
  });

export default Credits