import React, { useState, useEffect } from 'react'
import GridTable from './GridTable'
import GridSearchInput from './GridSearchInput'
import { gridColumns, gridData } from './gridData'
import './style.css'

function Grid() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(gridData)
  }, [])

  return (
    <>
      <GridSearchInput
        setData={setData}
        initialData={gridData}
        columns={gridColumns}
      />
      <GridTable columns={gridColumns} data={data} setData={setData} />
    </>
  )
}

export default Grid
