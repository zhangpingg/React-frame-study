import React from 'react';

interface IData {
  values: { [key: string]: any }
  onChange:(obj: { [key: string]: any }) => void
  onSave: (key: any) => void
}

export const TableContext = React.createContext<IData | undefined>(undefined);