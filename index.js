/**
 * ### Logs the given message to the console following the given format:
 * `{TIME} | {MODULE} | {MESSAGE}`
 *
 * **For more info on each of these and more, check the {@link https://github.com/jamesinaxx/Abbie/wiki/Reference wiki on github}**
 *
 *
 * @param {string} message The message you would like to log
 * @param {number} level The level of log message, view types {@link https://github.com/jamesinaxx/Abbie/wiki/Reference here}
 */
function log(message, level = 0) {
    const debugBool = process.env.DEBUG == 'true';

    const type = require('./lib/getName').getName(
        require.main.filename.replace(
            require('app-root-path').path + require('./lib/slash').slash(),
            '',
        ),
    );

    const chalk = require('chalk');

    let lvl = 'Info ';

    switch (level) {
        case 1:
            message = chalk.red(message);
            lvl = chalk.red('Error');
            break;
        case 2:
            message = chalk.green(message);
            lvl = chalk.green('Good ');
            break;
        case 3:
            message = chalk.yellow(message);
            lvl = chalk.yellow('Warn ');
            break;
        case 4:
            message = chalk.grey(message);
            lvl = chalk.grey('Debug');
            break;
        default:
            lvl = 'Info ';
            break;
    }
    if (!debugBool && lvl === chalk.grey('Debug')) {
        return;
    }
    console.log(
        `${chalk.green(
            require('./lib/time').time(),
        )} | ${lvl} | ${chalk.cyanBright('[' + type + ']')} ${message}`,
    );
}

module.exports.log = log;
