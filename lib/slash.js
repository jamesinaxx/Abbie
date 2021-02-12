module.exports.slash = function slash() {
    if (process.platform.includes('win')) {
        return '\\';
    } else {
        return '/';
    }
};