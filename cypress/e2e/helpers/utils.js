import { addDays, format, subDays, parse, subYears } from 'date-fns'

export default class Utils {
    
    static  generateRandomName() {
        const prefix = 'Automation'
        const randomString = Math.random().toString(36).substring(2, 6)
        return `${prefix} ${randomString}`
    }
  }