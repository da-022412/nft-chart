export const GRAPHQL_API = 'https://data.objkt.com/v3/graphql'

export const GRAPHQL_QUERY = `
query MyQuery {
  gallery(limit: 100, order_by: {volume_24h: desc}) {
    logo
    name
    slug
    volume_24h
  }
}
`