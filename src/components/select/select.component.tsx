interface IOption {
  id: number
  value: string
  label: string
}

interface ISelectProps {
  id: string
  label: string
  value: string
  options: IOption[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({
  id,
  label,
  value,
  options,
  onChange,
}: ISelectProps): JSX.Element {
  return (
    <>
      <div className="text-sm text-primary-black">
        <label htmlFor={id} className="font-semibold mb-2 text-base">
          {label}
        </label>
        <div className="pt-2">
          <select
            id={id}
            value={value}
            onChange={onChange}
            className="py-2 pl-2 pr-8 rounded block min-w-[200px] border border-gray-300 focus:outline-primary-purple appearance-none"
          >
            {options.map((option, index) => (
              <option key={`${option?.value}-${index}`} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <style jsx>
        {`
          select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            padding-right: 2.5rem;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        `}
      </style>
    </>
  )
}
