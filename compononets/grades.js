import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const Grades = ({ setSubject_Point, subject_point }) => {
  return (
    <View>
        <View style={styles.radioGroup}> 
        <Text>GRADE </Text>
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option1"
                  status={subject_point === '10' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Point('10')} 
                  color="green"
              /> 
              <Text style={styles.radioLabel}> 
                  S 
              </Text> 
          </View> 

          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option2"
                  status={subject_point === '9' ?  
                            'checked' : 'unchecked'} 
                  onPress={() => setSubject_Point('9')} 
                  color="lime"
              /> 
              <Text style={styles.radioLabel}> 
                  A 
              </Text> 
          </View> 
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option3"
                  status={subject_point === '8' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Point('8')} 
                  color="pink"
              /> 
              <Text style={styles.radioLabel}> 
                  B 
              </Text> 
          </View>
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option3"
                  status={subject_point === '7' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Point('7')} 
                  color="orange"
              /> 
              <Text style={styles.radioLabel}> 
                  C 
              </Text> 
          </View>
          <View style={styles.radioButton}> 
              <RadioButton.Android 
                  value="option3"
                  status={subject_point === '6' ?  
                          'checked' : 'unchecked'} 
                  onPress={() => setSubject_Point('6')} 
                  color="red"
              /> 
              <Text style={styles.radioLabel}> 
                  D 
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

export default Grades