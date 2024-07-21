class Homework {
  constructor(params) {
    const homework = {...params}
    this.id = homework.id,
    this.class = homework.class,
    this.name = homework.name,
    this.dueDate = homework.dueDate
    this.repeatSchedule = homework.repeatSchedule
  }
}

class Interval {
  constructor(params) {
    this.day = params.day
    this.intervalType = params.intervalType
    this.finishDate = params.finishDate
  }
}

const days = {
  Mon: 'monday',
  Tues: 'tuesday',
  Wednes: 'wednesday',
  Thurs: 'thursday',
  Fri: 'friday',
  Satur: 'saturday',
  Sun: 'sunday'
}

const intervalType = {
  daily: 'daily',
  weekly: 'weekly',
  biweekly: 'biweekly',
  monthly: 'monthly'
}