const heavyTask = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('working...')
    }
    return `${iterations} iterations `;
}
export default heavyTask;