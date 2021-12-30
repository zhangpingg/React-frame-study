import React from 'react';
import  {IPersonObjProps, TStudyType} from './interface'

interface IData {
  personObj?: IPersonObjProps
  refreshModule?: (type?: TStudyType) => void       // 刷新
}

export const PersonContext = React.createContext<IData>({});