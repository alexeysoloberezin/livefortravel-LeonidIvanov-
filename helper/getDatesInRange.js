export default function getDatesInRange(date1, date2, moment) {
  const dates = [date1, date2]
  const [startDate, endDate] = dates.map(date => moment(date, 'MM/DD/YYYY'))
  const datesInRange = []

  while(startDate.isSameOrBefore(endDate)) {
    datesInRange.push(startDate.format('YYYY-MM-DD'))
    startDate.add(1, 'days')
  }

  return datesInRange
}
