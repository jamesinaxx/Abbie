/**
 *
 * @param {string} message
 * @param {number} level
 */
module.exports.time = function time() {
    const date = new Date();

    // #region Hour
    let hour = date.getHours();

    if (hour > 12) {
        hour = hour - 12;
    }

    hour = hour.toString();

    if (hour.length == 1) {
        hour = '0' + hour.toString();
    }
    // #endregion Hour

    // #region Minute
    let minute = date.getMinutes();

    minute = minute.toString();

    if (minute.length == 1) {
        minute = '0' + minute.toString();
    }
    // #endregion Minute

    // #region second
    let second = date.getSeconds();

    second = second.toString();

    if (second.length == 1) {
        second = '0' + second.toString();
    }
    // #endregion second

    const timeVar = `${hour.toString()}:${minute.toString()}:${second.toString()}`;

    return timeVar;
};
