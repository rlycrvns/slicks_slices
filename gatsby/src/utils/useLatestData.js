import { useEffect, useState } from 'react';

const gql = String.raw;

const info = gql`
  name
  _id
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  // slicesmasters
  const [slicemasters, setSlicemasters] = useState();
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // use a side effect to fetch the data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${info}
              }
              hotSlices {
                ${info}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data state
        setSlicemasters(res.data.StoreSettings.slicemaster);
        setHotSlices(res.data.StoreSettings.hotSlices);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    slicemasters,
    hotSlices,
  };
}
