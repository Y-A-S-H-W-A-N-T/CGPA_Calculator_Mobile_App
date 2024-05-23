import { View, Text, Button, FlatList, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Home = () => {

  const [subject_name,setSubject_Name] = useState('')
  const [subject_point,setSubject_Point] = useState('')
  const [subject_credit,setSubject_Credit] = useState('')

  const [CGPA,setCGPA] = useState()

  const [subject,setSubject] = useState([{
    name: null,
    points: null,
    credit: null
  }])

  const Calculate = ()=>{
    let total = 0
    let total_credits = 0
    for(let i=0; i<subject.length;i++)
      {
        total = total + (subject[i].credit*subject[i].points)
        console.log(total)
        total_credits = total_credits + (subject[i].credit*1)
      }
    console.log(total)
    console.log(total_credits)
    setCGPA(total/total_credits)
  }

  const AddSubject = ()=>{
    setSubject((prev)=>{
      return [
        ...prev,
        { name : subject_name, points : subject_point, credit: subject_credit },
      ]
    })
  }

  return (
    <View>
      <Text>Select Subjects :</Text>
      <TextInput placeholder='Enter subject name' onChangeText={(val)=>setSubject_Name(val)}/>
      <TextInput placeholder='Enter subject grade points'  onChangeText={(val)=>setSubject_Point(val)}/>
      <TextInput placeholder='Enter subject credits'  onChangeText={(val)=>setSubject_Credit(val)}/>
      <Button title='Add subject' onPress={AddSubject}
      />
      <FlatList
        keyExtractor={(item)=>item.name}
        data={subject}
        renderItem={({ item })=>(
          <View style={{marginLeft: 10}}>
              <Text>{item.name}</Text><Text>{item.points}</Text><Text>{item.credit}</Text>
          </View>
        )}
      />
      <Button title='Calculate' onPress={Calculate}/>
      <Text>CGPA : {CGPA}</Text>
    </View>
  )
}

export default Home