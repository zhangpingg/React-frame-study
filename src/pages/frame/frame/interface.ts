// 学习类型
export type TStudyType = 'react' | 'vue' | 'js'

// 人员信息
export interface IPersonObjProps {
  name?: string
  age?: number
  sex?: '女' | '男'
  grade?: string
}

// 用户信息
export interface IUserObjProps {
  userName?: string
}