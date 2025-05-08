import { Controller } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { IForm } from '../App/App'

interface Props {
    control: Control<IForm>
    //register: UseFormRegister<IForm>
}

export function Checkbox({ control }: Props) {
    return <Controller
        control={control}
        name="isImportant"
        render={({ field }) => (
            <button
                style={{
                    padding: 6,
                    marginBottom: 10,
                    display: 'block',
                    borderRadius: 6,
                    backgroundColor: field.value ? '#0057b8' : '#444',
                    color: '#fff',
                    border: '1px solid grey',
                    cursor: 'pointer',
                }}
                onClick={(e) => {
                    e.preventDefault()
                    field.onChange(!field.value)
                }}
            >
                {field.value ? 'Important message' : 'Unimportant message'}
            </button>
        )}
    />
}
