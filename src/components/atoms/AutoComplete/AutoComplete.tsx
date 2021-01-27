// libs
import { useState, FC, memo } from 'react'
import { AutoComplete } from 'antd'

const mockVal = (str: string, repeat = 1): {value: string} => ({
  value: str.repeat(repeat)
})

const Complete: FC = () => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<Array<{ value: string }>>([])

  const onSearch = (searchText: string): void => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    )
  }

  const onSelect = (data: string): void => console.log('onSelect', data)

  const onChange = (data: string): void => setValue(data)

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Search"
    />
  )
}

export default memo(Complete)
