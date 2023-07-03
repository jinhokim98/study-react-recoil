import { useState, useCallback } from 'react'

function useInput<T>(
  initalValue: T
): [T, (e?: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<typeof initalValue>(initalValue)
  const onChange = useCallback((event: any) => {
    setValue(event.target.value)
  }, [])

  return [value, onChange]
}

export default useInput
