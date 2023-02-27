import { useParams } from 'react-router-dom'

import { PublicationSummary } from '@components/PublicationSummary'

export const Publication = () => {
  const params = useParams()

  console.log(params.id)

  return (
    <>
      <PublicationSummary />
    </>
  )
}
