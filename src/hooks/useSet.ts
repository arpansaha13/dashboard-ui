import { useState, useCallback } from 'react'

export function useSet<T>(initial?: T[]) {
  const [set, setSet] = useState<Set<T>>(() => new Set(initial))

  const add = useCallback((value: T | T[]) => {
    setSet(prev => {
      const newSet = new Set(prev)
      if (Array.isArray(value)) {
        value.forEach(item => newSet.add(item))
      } else {
        newSet.add(value)
      }
      return newSet
    })
  }, [])

  const remove = useCallback((value: T) => {
    setSet(prev => {
      const newSet = new Set(prev)
      newSet.delete(value)
      return newSet
    })
  }, [])

  const clear = useCallback(() => {
    setSet(new Set())
  }, [])

  const has = useCallback(
    (value: T) => {
      return set.has(value)
    },
    [set],
  )

  const toggle = useCallback((value: T) => {
    setSet(prev => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        newSet.add(value)
      }
      return newSet
    })
  }, [])

  return { size: set.size, add, remove, clear, has, toggle }
}
