type DayFormatter = (date: Date) => Date
type WeekFormatter = (date: Date) => Date

export class Calendar {
  constructor(firstWeekDay: Date | 0)

  weekStartDate(data: Data): Date

  monthDates(year: number,
             month: number,
             dayFormatter?: DayFormatter,
             weekFormatter?: WeekFormatter): date[]
  monthText(year : number, month : number) : string
}