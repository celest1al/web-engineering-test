import { options } from './users-list-filter.constant'
import { Input } from '@components/input/input.component'
import { Select } from '@components/select/select.component'
import { TGender } from '@features/users-list/users-list.type'

interface IFilterprops {
  keyword: string
  gender: TGender
  onChangeKeyword: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeGender: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onResetKeyword: () => void
  onResetFilter: () => void
}

export function Filter({
  gender,
  keyword,
  onChangeGender,
  onChangeKeyword,
  onResetFilter,
  onResetKeyword,
}: IFilterprops): JSX.Element {
  return (
    <div className="py-8 flex items-end space-x-4">
      <Input
        id="search-user"
        buttonLabel="Clear"
        label="Search"
        placeholder="Search user"
        value={keyword}
        onChange={onChangeKeyword}
        onClick={onResetKeyword}
      />
      <Select
        id="select-gender"
        label="Gender"
        value={gender}
        options={options}
        onChange={onChangeGender}
      />
      <button
        onClick={onResetFilter}
        className="px-4 py-2 rounded bg-white text-primary-purple text-sm font-semibold border border-primary-purple hover:bg-primary-purple hover:border-primary-purple hover:text-primary-white"
      >
        Clear Filter
      </button>
    </div>
  )
}
