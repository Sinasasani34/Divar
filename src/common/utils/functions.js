const isTrue = (value) => ["true", 1, true].includes(value);
const isFlase = (value) => ["false", 0, false].includes(value);

module.exports = {
    isTrue,
    isFlase
}