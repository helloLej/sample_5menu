import React, {useState} from 'react'
const sortOrders = { age: 1, name: 1, weight: 1 }

function GridTable({columns, data, setData}) {
  const [activeIdx, setActiveIdx] = useState('');
  const [sortOrders, setSortOrders] = useState({ age: 1, name: 1, weight: 1 });

  const clickSortBtn = (column, i) => {
    setActiveIdx(i)
    const sortFn = (a, b) => {
      if (a > b) return 1 * sortOrders[column]
      else if (b > a) return -1 * sortOrders[column]
      else return 0
    }
    
    const sortedData = [...data].sort((a,b) => sortFn(a[column], b[column]))
    setData(sortedData)
    const newSortOrder = {...sortOrders, [column]: sortOrders[column] * -1}
    setSortOrders(newSortOrder)
  }

  const activeClass = (i) => i === activeIdx ? 'active' : ''
  const desc = column => sortOrders[column] === -1 ? 'desc' : ''

  return (
    <table className="grid_table">
      <thead>
        <tr className="grid_thead_tr grid_tr">
          {columns.map((column, i) => (
            <th 
              className={`grid_th ${activeClass(i)}`}
              key={column}>
                {column}
                <span className={`sortBtn ${desc(column)}`} onClick={() =>clickSortBtn(column, i)}></span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((el, i) => (
          <tr key={el.column + String(i)} className="grid_tr">
            {columns.map((column, idx) => (
              <td className={`grid_td ${activeClass(idx)}`} key={el[column]+idx}>
                {el[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GridTable
