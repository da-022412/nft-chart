import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Constants from '../../utils'

const List = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({ gallery: [] });

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_OBJKT_QUERY,
      })

      setLoading(false);
      setItems({ gallery: queryResult.data.data.gallery })
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        items.gallery.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}
    </div>
  )
}

export default List