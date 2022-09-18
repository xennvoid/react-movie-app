export default function timeConvert(num: number = 60) {
    if (num < 60)
        return num + ' minutes';
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + ` ${rhours > 1 ? 'hours' : 'hour'} ` + rminutes + ` ${rminutes > 1 ? 'minutes' : 'minute'}`;
}