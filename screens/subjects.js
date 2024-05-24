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
      name: 'Data Science',
      credit: '3'
    },
    {
      name: 'Community Service Project',
      credit: '1'
    },
    {
      name: 'Computer Networks',
      credit: '3'
    },
    {
      name: 'Database Management System',
      credit: '3'
    },
    {
      name: 'Data Structures',
      credit: '3'
    },
    {
      name: 'Operating Systems',
      credit: '3'
    },
    {
      name: 'Object Oriented Programming using Java',
      credit: '3'
    },
    {
      name: 'Deep Learning',
      credit: '4'
    },
    {
      name: 'IoT and Cloud Computing',
      credit: '4'
    },
    {
      name: 'Block Chain Technology',
      credit: '3'
    },
    {
      name: 'Web and Mobile Application Development',
      credit: '4'
    },
    {
      name: 'Database Management System',
      credit: '3'
    },
    {
      name: 'Data Structures Laboratory',
      credit: '1'
    },
    {
      name: 'Computer Networks Laboratory',
      credit: '1'
    },
    {
      name: 'Operating Systems Laboratory',
      credit: '1'
    },
    {
      name: 'Competitive Coding - I',
      credit: '1'
    },
    {
      name: 'Competitive Coding - II',
      credit: '1'
    },
    {
      name: 'Formal Languages and Automata Theory',
      credit: '3'
    },
    {
      name: 'Modern Physics Laboratory',
      credit: '1'
    },
    {
      name: 'Engineering Products Lab',
      credit: '1'
    },
    {
      name: 'Problem Solving using C Lab',
      credit: '1'
    },
    {
      name: 'IT workshop',
      credit: '1'
    },
    {
      name: 'Object Oriented Programming using C++ Lab',
      credit: '1'
    },
    {
      name: 'Programming Using PythonLab',
      credit: '1'
    },
    {
      name: 'Engineering Graphics',
      credit: '3'
    },
    {
      name: 'Introduction to Engineering',
      credit: '3'
    },
    {
      name: 'Basic Electronics & Digital Logic Design',
      credit: '3'
    },
    {
      name: 'Professional Communication - II',
      credit: '2'
    },
    {
      name: 'Professional Communication - I',
      credit: '2'
    },
    {
      name: 'Biology for Engineers',
      credit: '2'
    },
    {
      name: 'Universal Human Values',
      credit: '3'
    },
    {
      name: 'Project Management & Finance',
      credit: '2'
    },
    {
      name: 'Innovation & Entrepreneurship',
      credit: '2'
    },
    {
      name: 'Design thinking',
      credit: '2'
    },
    {
      name: 'Linear Algebra for Computing',
      credit: '4'
    },
    {
      name: 'Calculus & Ordinary differential Equations',
      credit: '4'
    },
    {
      name: 'Probability, Statistics and Queuing theory',
      credit: '4'
    },
    {
      name: 'Discrete Mathematical Structures',
      credit: '4'
    },
    {
      name: 'Semiconductor Physics',
      credit: '3'
    },
    {
      name: 'Environmental Science',
      credit: '3'
    },
    {
      name: 'Problem Solving using C',
      credit: '3'
    },
    {
      name: 'Object Oriented Programming using C++',
      credit: '3'
    },
    {
      name: 'Environmental Science and Sustainability',
      credit: '3'
    },
    {
      name: 'Artificial Intelligence Techniques',
      credit: '4'
    },
    {
      name: 'Data Visualization ',
      credit: '4'
    },
    {
      name: 'Natural Language Processing ',
      credit: '4'
    },
    {
      name: 'Reinforcement Learning',
      credit: '3'
    },
    {
      name: 'Cognitive Computing',
      credit: '3'
    },
    {
      name: 'Machine Learning Techniques',
      credit: '4'
    },
    {
      name: 'Time series and Forecasting',
      credit: '4'
    },
    {
      name: 'Open Elective Course',
      credit: '3'
    },
    {
      name: 'Open Elective Course ( language )',
      credit: '2'
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
    marginBottom: 10
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