import { useDebounce } from './use-debounce.hook'
import { act, renderHook } from '@testing-library/react-hooks'
import { useState, useCallback } from 'react'

function useCountTest() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  const debouncedCount = useDebounce({ value: count, delay: 1000 })
  return {
    count,
    increment,
    debouncedCount
  }
}

describe('useDebounce hook', function () {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should debounce and only change value when delay time has passed', function () {
    jest.useFakeTimers()
    const { result } = renderHook(() => useCountTest())

    const incrementAndPassTime = (passedTime: number) => {
      act(() => {
        result.current.increment()
        jest.advanceTimersByTime(passedTime)
      })
    }

    incrementAndPassTime(100)

    expect(result.current.debouncedCount).toBe(0)
    expect(result.current.count).toBe(1)

    incrementAndPassTime(500)

    expect(result.current.debouncedCount).toBe(0)
    expect(result.current.count).toBe(2)

    incrementAndPassTime(1000)

    expect(result.current.debouncedCount).toBe(2)
    expect(result.current.count).toBe(3)

    act(() => {
      jest.advanceTimersByTime(1)
    })

    expect(result.current.debouncedCount).toBe(2)
    expect(result.current.count).toBe(3)
  })
})
