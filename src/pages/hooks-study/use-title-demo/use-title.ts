import React, { useCallback, useEffect, useState } from 'react'

export const useTitle = (initTitle: string): [string, (data: string | Function) => void] => {
  const [documentTitle, setDocumentTitle] = useState(initTitle)

  /** 修改标题 */
  const changeDocumentTitle = useCallback((data) => {
    setDocumentTitle(data)
  }, [])

  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle])

  return [documentTitle, changeDocumentTitle]
}