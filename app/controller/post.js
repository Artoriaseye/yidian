'use strict';

const pinyin = require('../utils/pinyin');

function grouped(arr, key) {
    const groups = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const firstChar = item[key].charAt(0);

        groups[firstChar] = groups[firstChar] || [];
        groups[firstChar].push(item);
    }

    const segs = [];
    Object.keys(groups).forEach(key => {
        segs.push({ letter: key, data: groups[key] });
    });
    segs.sort((a, b) => a.letter > b.letter);
    return segs;
}
