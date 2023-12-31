import {
  QueryClient,
} from '@tanstack/react-query'

  // Create a client
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true
      }
    }
  })

  // Query Keys
  const query_transactions_query_key = 'query_transactions'
  const query_blocks_query_key  = 'query_blocks'
  const peer_info_query_key = 'query_peer_info'

  export {query_transactions_query_key , query_blocks_query_key, peer_info_query_key }
  export default queryClient