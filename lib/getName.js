module.exports.getName = function getName(string) {
    let name = string;
    const dirs = [''];
    dirs.shift();
    for (const word of name.split(require('./slash').slash())) {
        dirs.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    name = dirs
        .join('/')
        .replace('.js', '')
        .replace('.ts', '')
        .replace('.jsx', '')
        .replace('.tsx', '');

    return name;
};
