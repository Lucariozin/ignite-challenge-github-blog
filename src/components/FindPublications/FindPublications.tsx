import { Dispatch, SetStateAction, useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FaSearch } from 'react-icons/fa'

import { fetchGithubIssuesData } from '@services/github'

import { delay } from '@utils/delay'

import { useGithub } from '@contexts/GithubContext'

import { PublicationFormInputs, zodSchema } from './zodSchema'

import {
  Container,
  Header,
  Input,
  PublicationForm,
  PublicationsAmount,
  PublicationsTitle,
  SearchButton,
} from './FindPublications.styles'

interface FindPublicationsProps {
  publicationsAmount?: number
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const FindPublications = ({
  publicationsAmount = 0,
  isLoading = false,
  setIsLoading = () => {},
}: FindPublicationsProps) => {
  const { setPublications } = useGithub()

  const { register, handleSubmit } = useForm<PublicationFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  const handlePublicationFormSubmit = useCallback(
    async ({ query }: PublicationFormInputs) => {
      setIsLoading(true)

      const [{ data, status }] = await Promise.all([
        fetchGithubIssuesData({
          githubNickName: 'Lucariozin',
          repo: 'ignite-challenge-github-blog',
          query,
        }),
        delay(),
      ])

      if (status === 'failed' || !data) {
        setIsLoading(false)
        return
      }

      setPublications(data.items)

      setIsLoading(false)
    },
    [setPublications, setIsLoading],
  )

  const publicationsAmountText = `${publicationsAmount} ${publicationsAmount === 1 ? 'publicação' : 'publicações'}`

  return (
    <Container>
      <Header>
        <PublicationsTitle>Publicações</PublicationsTitle>

        <PublicationsAmount>{publicationsAmountText}</PublicationsAmount>
      </Header>

      <PublicationForm onSubmit={handleSubmit(handlePublicationFormSubmit)}>
        <Input type="text" placeholder="Buscar conteúdo" disabled={isLoading} {...register('query')} />

        <SearchButton type="submit" title="Fazer a busca" disabled={isLoading}>
          <FaSearch size={16} />
        </SearchButton>
      </PublicationForm>
    </Container>
  )
}
