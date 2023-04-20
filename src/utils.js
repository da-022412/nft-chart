export const GRAPHQL_API = 'https://data.objkt.com/v3/graphql'

export const GET_OBJKT_QUERY = `
query MyQuery {
  gallery(limit: 100, order_by: {volume_24h: asc}) {
    logo
    name
    slug
    volume_24h
  }
}
`