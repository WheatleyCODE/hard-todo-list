import React from 'react'
import { useEffect, useState } from 'react'

export const useClickOutside = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export const useLogger = (value: any) => {
  useEffect(() => {
    console.log(value)
  }, [value])
}

export const useInput = (initialValue: string, placeholder: string, type: string) => {
  const [value, setValue] = useState(initialValue)
  const [validError, setValidError] = useState('')

  let onChange

  switch (type) {
    case 'email':
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

        if (e.target.value.length > 7) {
          setValidError('Нельзя больше 7')
        } else {
          setValidError('')
        }
      }
      break;
    case 'password':
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

        if (e.target.value.length < 5) {
          setValidError('Нельзя меньше 5')
        } else {
          setValidError('')
        }
      }
      break;
  
    default:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
      }
      break;
  }
  return {
    standart: { value, onChange, placeholder, type },
    validError,
  }
}