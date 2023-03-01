import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date: Date | string = new Date()) => {
  const initialDate = new Date(date)

  const dateToNow = formatDistanceToNow(initialDate, { addSuffix: true, locale: ptBR })
  const formattedDate = dateToNow[0].toUpperCase() + dateToNow.slice(1)

  return formattedDate
}
