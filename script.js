function solution(D) {

    let dayMap = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let result = {'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0};
    
    
    function getDayOfWeek(dateString) {
        let date = new Date(dateString);
        return dayMap[date.getDay() - 1];
    }
    
    
    for (let key in D) {
        let day = getDayOfWeek(key);
        result[day] += D[key];
    }

    
    let days = Object.keys(result);
    for (let i = 0; i < days.length; i++) {
        if (result[days[i]] === 0) {
            let prev = (i - 1 + 7) % 7;
            let next = (i + 1) % 7;
            result[days[i]] = Math.round((result[days[prev]] + result[days[next]]) / 2);
        }
    }

    return result;
}

let D = {
    '2020-01-01': 4, 
    '2020-01-02': 4, 
    '2020-01-03': 6, 
    '2020-01-04': 8, 
    '2020-01-05': 2, 
    '2020-01-06': -6, 
    '2020-01-07': 2, 
    '2020-01-08': -2
};
console.log(solution(D));
