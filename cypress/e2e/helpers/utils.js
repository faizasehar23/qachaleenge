import { addDays, format, subDays, parse, subYears } from 'date-fns'

export default class Utils {
    
    static  generateRandomName() {
        const prefix = 'Automation'
        const randomString = Math.random().toString(36).substring(2, 6)
        return `${prefix} ${randomString}`
    }

    static generateRandomEmail() {
        const prefix = 'automation'
        const randomString = Math.random().toString(36).substring(2, 8);
        const domain = 'example.com';
        return `${prefix}_${randomString}@${domain}`
    }

    static generateRandomPassword(minLength = 11) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const specialChars = '_';
        const numericChars = '0123456789';
      
        const allChars = uppercaseChars + lowercaseChars + specialChars + numericChars;
      
        if (minLength < 11) {
          minLength = 11;
        }
      
        let password = '';
      
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
        password += numericChars[Math.floor(Math.random() * numericChars.length)];
      
        for (let i = 4; i < minLength; i++) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
      
        password = password.split('').sort(() => Math.random() - 0.5).join('');
      
        return password;
    }

    static generateOneMonthAgoDate() {
      const today = new Date();
      
      const oneMonthAgo = new Date(today);
      oneMonthAgo.setMonth(today.getMonth() - 1);
    
      const day = oneMonthAgo.getDate().toString().padStart(2, '0');
      const month = (oneMonthAgo.getMonth() + 1).toString().padStart(2, '0');
      const year = oneMonthAgo.getFullYear();
    
      return `${day}/${month}/${year}`;
    }

    static generateRandom5DigitNumber() {
      const min = 10000; // Smallest 4-digit number
      const max = 99999; // Largest 4-digit number
    
      // Generate a random number between min and max (inclusive)
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
      return randomNumber;
    }
   
    static generateTodayDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear();
      const formattedToday = dd + '/' + mm + '/' + yyyy
      return formattedToday
    }

    static generateLastDayOfMonth() {
      const today = new Date();
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
      const dd = String(lastDayOfMonth.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = lastDayOfMonth.getFullYear();
      
      const formattedLastDay = dd + '/' + mm + '/' + yyyy;
      return formattedLastDay;
    }

  
    static getPreviousDay(inputDate) {
      // Parse the input date in the format "dd-mm-yyyy"
      const parts = inputDate.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript
      const year = parseInt(parts[2], 10);
    
      // Create a Date object with the provided date
      const currentDate = new Date(year, month, day);
    
      // Subtract one day
      currentDate.setDate(currentDate.getDate() - 1);
    
      // Get the components of the previous day
      const previousDay = currentDate.getDate();
      const previousMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
      const previousYear = currentDate.getFullYear();
    
      // Format the result as "dd-mm-yyyy"
      const formattedPreviousDay = 
        String(previousDay).padStart(2, '0') + '-' +
        String(previousMonth).padStart(2, '0') + '-' +
        previousYear;
      return formattedPreviousDay;
    }

    static getTodayDate = () => {
      const currentDate = new Date();
      return format(currentDate, 'dd/MM/yyyy');
    }

    static getPreviousDayDate = () => {
      const currentDate = new Date();
      const previousDate = subDays(currentDate, 1);
      return format(previousDate, 'dd/MM/yyyy');
    }

    static getOneMonthAfterDate = () => {
      const currentDate = new Date();
      const previousDate = addDays(currentDate, 30);
      return format(previousDate, 'dd/MM/yyyy');
    }

    static getOneMonthBeforeDate = () => {
      const currentDate = new Date();
      const previousDate = subDays(currentDate, 30);
      return format(previousDate, 'dd/MM/yyyy');
    }

    static getOneDayAfterDate(dateString) {
      const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
      const nextDay = addDays(parsedDate, 1);
      return format(nextDay, 'dd/MM/yyyy');
    }

    static getOneDayBeforeDate(dateString) {
      const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
      const beforeDay = subDays(parsedDate, 1);
      return format(beforeDay, 'dd/MM/yyyy');
    }
    
    static formatDate(inputDate) {
      const formattedDate = format(new Date(inputDate), 'dd/MM/yyyy');
      return formattedDate;
    }

    static getRandomBirthDate() {
      const randomBirthYear = subYears(new Date(), Math.floor(Math.random() * 48) + 18).getFullYear();
      const randomBirthMonth = Math.floor(Math.random() * 12) + 1;
      const maxDaysInMonth = new Date(randomBirthYear, randomBirthMonth, 0).getDate();
      const randomBirthDay = Math.floor(Math.random() * maxDaysInMonth) + 1;
      const randomBirthDate = new Date(randomBirthYear, randomBirthMonth - 1, randomBirthDay);
      const formattedRandomBirthDate = format(randomBirthDate, 'dd/MM/yyyy');
      return formattedRandomBirthDate;
    }

    static generateRandomGermanMobileNumber() {
      const networkProviderCodes = ['15', '16', '17', '19'];
      const randomProviderCode = networkProviderCodes[Math.floor(Math.random() * networkProviderCodes.length)];
      const randomSubscriberNumber = Math.floor(100000000 + Math.random() * 900000000);
      const germanMobileNumber = `0${randomProviderCode}${randomSubscriberNumber}`;
      return germanMobileNumber;
    }

    static getRandomPastDate() {
      const randomDays = Math.floor(Math.random() * 100) + 1;
      const currentDate = new Date();
      const futureDate = subDays(currentDate, randomDays);
      const formattedFutureDate = format(futureDate, 'dd/MM/yyyy');
      return formattedFutureDate;
    }
    
}