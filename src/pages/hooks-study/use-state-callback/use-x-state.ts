import { useEffect, useRef, useState } from 'react'

const useXState = (initState: any) => {
  const [state, setState] = useState(initState)
  let isUpdate: any = useRef()

  const setXState = (state: any, cb: Function) => {
    setState((prev: any) => {
      isUpdate.current = cb
      return typeof state === 'function' ? state(prev) : state
    })
  }
  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current()
    }
  })

  return [state, setXState]
}

export default useXState
