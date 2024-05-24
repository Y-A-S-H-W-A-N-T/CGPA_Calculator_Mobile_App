import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Grades from '../compononets/grades'
import Credits from '../compononets/credits'

const Home = () => {

  const [subject_name,setSubject_Name] = useState('')
  const [subject_point,setSubject_Point] = useState('')
  const [subject_credit,setSubject_Credit] = useState('')

  const [CGPA,setCGPA] = useState()

  const [subject,setSubject] = useState([])

  const Clear = ()=>{
    setCGPA('')
    setSubject_Credit('')
    setSubject_Point('')
    setSubject_Name('')
    setSubject([])
  }

  const Calculate = ()=>{
    if(subject.length===0) return alert("Add Subjects")
    let total = 0
    let total_credits = 0
    for(let i=0; i<subject.length;i++)
      {
        total = total + (subject[i].credit*subject[i].points)
        total_credits = total_credits + (subject[i].credit*1)
      }
    setCGPA(total/total_credits)
  }

  const AddSubject = ()=>{
    if (subject_name === '' || subject_point === '' || subject_credit === '') 
      {
        alert("Enter All Fields")
        return
      }
    setSubject((prev)=>{
      return [
        ...prev,
        { name : subject_name, points : subject_point, credit: subject_credit },
      ]
    })
    setSubject_Credit('')
    setSubject_Point('')
    setSubject_Name('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Subject name"
        onChangeText={(val) => setSubject_Name(val)}
        value={subject_name}
        style={styles.input}
      />
      <Grades setSubject_Point={setSubject_Point} subject_point={subject_point}/>
      <Credits setSubject_Credit={setSubject_Credit} subject_credit={subject_credit}/>
      <TouchableOpacity onPress={AddSubject}>
        <Text style={styles.add}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.subjectContainer}>
          <Text style={styles.subjectText}>Subject</Text>
          <Text style={styles.detailsText}>Grade</Text>
          <Text style={styles.detailsText}>Credits</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.name}
        data={subject}
        renderItem={({ item, index }) => (
          <View style={styles.subjectContainer}>
            {subject.length>0 && <Text>{index+1} </Text>}
            <Text style={styles.subjectText}> {item.name}</Text>
            <Text style={styles.detailsText}>{item.points==='10'? 'S' : item.points==='9'? 'A' : item.points==='8'? 'B' : item.points==='7'? 'C' : 'D' }</Text>
            <Text style={styles.detailsText}>{item.credit}</Text>
          </View>
        )}
      />
      <View style={styles.add_clear}>
        <TouchableOpacity onPress={Clear}>
          <Text style={styles.button}>CLEAR ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Calculate} style={styles.cgpa_button}>
          <Text style={styles.button}>GET CGPA</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cgpaText}>{CGPA}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  add: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#77D970',
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    alignContent: 'center',
    borderRadius: 100,
    elevation: 5,
    width: '20%',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  add_clear: {
    flexDirection: 'row',
  },
  cgpa_button: {
    marginLeft: 'auto',
    elevation: 5
  },
  button: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#E23E57',
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    alignContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  cgpaText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#E23E57',
    width: '30%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 100,
    elevation: 5
  },
});

export default Home