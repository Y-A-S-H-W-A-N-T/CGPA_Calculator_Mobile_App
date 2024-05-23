import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const Subjects = () => {

  const subject = [
    {
      name: 'Compiler Design',
      credit: '3'
    },
    {
      name: 'Microprocessor & Microcontroller',
      credit: '2'
    },
    {
      name: 'Machine Learning',
      credit: '3'
    },
    {
      name: 'Software Engineering',
      credit: '3'
    },
    {
      name: 'Microprocessor & Microcontroller Lab',
      credit: '1'
    },
    {
      name: 'Machine Learning Lab',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Privacy & Security in Online Social Media',
      credit: '2'
    },
    {
      name: 'Minor Project - II',
      credit: '2'
    },
    {
      name: 'Professional Proficiency Cource - IV',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    },
    {
      name: 'Data Visualization',
      credit: '4'
    }
  ]

  return (
    <View>
        <View style={styles.subjectContainer}>
            <Text style={styles.subjectText}>Subject</Text>
            <Text style={styles.detailsText}>Credits</Text>
        </View>
        <FlatList
          style={styles.subject_box}
          data={subject}
          renderItem={({ item, index }) => (
            <View style={styles.subjectContainer}>
              {subject.length>0 && <Text>{index+1} </Text>}
              <Text style={styles.subjectText}> {item.name}</Text>
              <Text style={styles.detailsText}> {item.credit}</Text>
            </View>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  subjectContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 0,
    marginBottom: 0
  },
  subjectText: {
    fontSize: 16,
    flex: 3,
  },
  detailsText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  subject_box: {
    marginBottom: 100
  }
});


export default Subjects