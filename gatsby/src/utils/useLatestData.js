import { useEffect, useState } from 'react';

export default function useLatestData() {
  // slicesmasters
  const [slicemasters, setSlicemasters] = useState();
  // hot slices
  const [hotSlices, setHostSlices] = useState();
  // use a side effect to fetch the data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query{
          StoreSettings(id: "downtown") {
            name
            slicemaster {
              name
            }
            hotSlices {
              name
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // check for errors
        // set the data state
        setSlicemasters(res.data.StoreSettings.slicemaster);
        setHostSlices(res.data.StoreSettings.hotSlices);
      });
  }, []);
  return {
    slicemasters,
    hotSlices,
  };
}
