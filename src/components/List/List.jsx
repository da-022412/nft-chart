import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as Constants from '../../constants';

import ListItem from './ListItem';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GRAPHQL_QUERY,
      });

      setLoading(false);
      setItems(queryResult.data.data.gallery);
    };

    fetchData();
  }, []);

  console.log(items);

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        items.map((item, index) => (
          <ListItem content={item} key={index} />
        ))
      )}
    </div>
  );
};

export default List;
