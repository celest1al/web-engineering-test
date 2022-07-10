import { ChangeEvent } from 'react'

interface IInputProps {
  id: string
  label: string
  value: string
  placeholder?: string
  buttonLabel: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

export function Input({
  id,
  label,
  value,
  buttonLabel,
  placeholder,
  onChange,
  onClick,
}: IInputProps): JSX.Element {
  return (
    <div className="text-sm text-primary-black">
      <label htmlFor={id} className="font-semibold mb-2 text-base">
        {label}
      </label>
      <div className="flex items-center pt-2">
        <input
          id={id}
          className="p-2 rounded-l block min-w-[200px] border border-gray-300 focus:outline-primary-purple"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button
          onClick={onClick}
          className="rounded-r py-2 px-4 border border-blue-500 bg-blue-500 text-sm text-primary-white font-semibold hover:bg-blue-600 hover:border-blue-600"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
