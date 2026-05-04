import {
  useCallback,
  useState,
  type CSSProperties,
  type FormEvent,
} from 'react'

export function useConsultationForm() {
  const [submitLabel, setSubmitLabel] = useState('Send Message →')
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [submitStyle, setSubmitStyle] = useState<CSSProperties>({})

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitLabel('Message Sent ✓')
    setSubmitStyle({ background: '#5C8C5C' })
    setSubmitDisabled(true)
    window.setTimeout(() => {
      setSubmitLabel('Send Message →')
      setSubmitStyle({})
      setSubmitDisabled(false)
      form.reset()
    }, 3000)
  }, [])

  return {
    handleSubmit,
    submitLabel,
    submitDisabled,
    submitStyle,
  }
}
