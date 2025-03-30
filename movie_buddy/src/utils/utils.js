export function convertMinutes(minutes){
    const hours = Math.floor(minutes/60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
}