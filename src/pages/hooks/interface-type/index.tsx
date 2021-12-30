import React, { useState, useCallback } from 'react';
import {Button} from 'antd'
import {IParent} from './interface'

interface IProps {
  id?:number
}
interface IPersonInfo{
  name:string
  age?:number | string          // 联合类型
  flag?:boolean
  sex?:'女'|'男'
  obj?:{
    name:string
    age:number
  }
  list1?:number[]
  list2?:Array<number>
  list3?:Array<{name:string, age:number}>
  changeTab1?:(id?:number) => void
  changeTba2?:(id?:number) => number
  style?: React.CSSProperties
  params1?:React.ReactElement
  parmas3?:React.ElementType
  params2?:React.ReactNode
  paramsx?:any
}
interface IPersonList {
  [index:number]:{name?:string, age?:number}
}
interface IPersonListItem {
  name?:string
  age?:number
}
interface IPerson<T>{         // 泛型
  id:T,
  name?: string
}
interface IChild extends IParent {
  age:number
}

type TName = string | number
type TAnimalObj = {
  name?:string,
  age?:number
}
type TAnimal<T> = {           // 泛型
  id:T,
  name?: string
}

const InterfaceType:React.FC<IProps> = (props) => {
  const [personInfo, setPersonInfo]:[IPersonInfo, Function] = useState({name:'张三'})
  const [personList, setPersonList]:[IPersonList | IPersonListItem[], Function] = useState([])
  // 以下的内容都可以定义在 hooks 里面
  const person:IPerson<number> = {
    id:1
  }
  const child:IChild = {
    name:'张三',
    age:10
  }
  const animalName:TName = '小黑'
  const animalObj:TAnimalObj = {
    name:'小黑'
  }
  const animal:TAnimal<number> = {
    id:1
  }

  // 获取人员信息
  const getPersonInfo = useCallback(() => {
    let _result = {
      name:'李四',
      age:20,
      flag:true,
      sex:'女',
      obj:{
        name:'王五',
        age:30
      },
      list3:[
        {
          name:'赵六',
          age:30,
        }
      ]
    }
    setPersonInfo(_result);
  }, [])
  // 获取人员列表
  const getPersonList = useCallback(() => {
    let _result = [
      {
        name:'张三',
        age:10
      },{
        name:'李四',
        age:20
      }
    ]
    setPersonList(_result);
  }, [])

  return (
    <div>
      interface <br />
      【personInfo.name 转 boolean】{!!personInfo.name ? '有值' : '无值'}  <br />
      【personInfo】{JSON.stringify(personInfo)}
      <Button type='primary' onClick={() => {getPersonInfo()}}>获取数据</Button> <br />

      【personList】{JSON.stringify(personList)}
      <Button type='primary' onClick={() => {getPersonList()}}>获取列表</Button> <br />
      
      【person】{JSON.stringify(person)}  <br />
      【child】{JSON.stringify(child)}    <br /><br />

      type  <br />
      【animalName】{animalName}  <br />
      【animalObj】{JSON.stringify(animalObj)}   <br />
      【animal】{JSON.stringify(animal)}
    </div>
  )
}

export default InterfaceType;