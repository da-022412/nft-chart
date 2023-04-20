import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Constants from '../../utils'

const List = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await axios.post(Constants.GRAPHQL_API, {
          query: Constants.GET_OBJKT_QUERY,
        })
        // Define the data result.
        const result = queryResult.data.data;
        setLoading(false);
        console.log(result);
      } catch {
        throw Error('API fetch failed')
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <p>Done</p>
      )}
    </>
  )
}

export default List