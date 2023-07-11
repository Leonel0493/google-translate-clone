import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

export const TextArea = ({ loading, type, value, onChange }: Props) => {
  return (
    <Form.Control
      as="textarea"
      placeholder={
        type === SectionType.From ? 'Introduzca un Texto' : 'Traduccion'
      }
      autoFocus={type === SectionType.From}
      style={{ height: '150px' }}
    />
  )
}
