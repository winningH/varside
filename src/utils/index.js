import dayjs from 'dayjs'

export const formatDate = (date, formatStyle = 'YYYY-MM-DD') => {
  if (!date) return
  return dayjs(date).format(formatStyle)
}
