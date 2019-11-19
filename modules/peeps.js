const combineArrays = require('../combine-arrays');

const peeps = ['Allen', 'Dane', 'Lucas', 'Luke', 'Josh', 'Travis'];
const others = ['Myron', 'Scott', 'Rachael'];

console.log('peeps:', peeps);
console.log('others: ', others);

module.exports = {
    peeps: peeps,
    others: others,
    combined: combineArrays(peeps, others),
};