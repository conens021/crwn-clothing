class DateTimeUtils {
    appendHours(numOfHours, date = new Date()) {
        return date.getTime() + (numOfHours * 60 * 60 * 1000)
    }

    isPastTime(date) {
        const now = new Date();
        const comparedTime = new Date(date)

        if (comparedTime.getTime() < now)
            return true

        return false
    }
}

export default new DateTimeUtils()

