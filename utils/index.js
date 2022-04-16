const prettyPrintDate = () => {
    const now = new Date();

    const date = `${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}`; 
    const month = `${now.getMonth() + 1 < 10 && '0'}${now.getMonth() + 1}`;
    const year = now.getFullYear();

    const hour = `${now.getHours() < 10 ? '0' : ''}${now.getHours()}`;
    const minutes = `${now.getMinutes() < 10 ? '0': ''}${now.getMinutes()}`;
    const seconds = `${now.getSeconds() < 10 ? '0' : ''}${now.getSeconds()}`

    return `${date}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

module.exports = {
    prettyPrintDate
}