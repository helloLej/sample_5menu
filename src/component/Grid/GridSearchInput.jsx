import React, {useState} from 'react'

function GridSearchInput({setData, initialData, columns}) {
  const [searchKey, setSearchKey] = useState('')
  
  const search = (e, initialData, columns) => {
    const value = e.target.value
    setSearchKey(value)

    let filteredData = []
    filteredData = [...initialData].filter(
      (o) =>
        String(o[columns[0]]).includes(value) ||
        String(o[columns[1]]).includes(value) ||
        String(o[columns[2]]).includes(value),
    )
    setData(filteredData)
  }

  return (
     <input
        className="grid_searchInput"
        type="text"
        value={searchKey}
        placeholder="Please enter keywords"
        onChange={(e) => search(e, initialData, columns)}
        maxLength={10}
      />
  )
}

export default React.memo(GridSearchInput)
