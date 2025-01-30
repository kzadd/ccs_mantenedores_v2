import { format } from 'date-fns'

/**
 * Formats a date to a specified format.
 */
export const formatDate = (date: Date | string, dateFormat: string): string => {
  const parsedDate = date instanceof Date ? date : new Date(date)

  if (Number.isNaN(parsedDate.getTime())) return ''

  return format(parsedDate, dateFormat)
}

/**
 * Formats a date string to the format 'dd/MM/yyyy'.
 */
export const formatDateToShortDate = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy')
}

/**
 * Formats a date string to the format 'dd/MM/yyyy HH:mm'.
 */
export const formatDateToShortDateTime = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm')
}
