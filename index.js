const sqr = (num) => {
    return num * num;
};

const sqrt = (num) => {
    return Math.sqrt(num);
};


const mnjsFn = () => {
    const mnjs = {};

    mnjs.sqr = sqr;
    mnjs.sqrt = sqrt;
    mnjs.pi = 3.14159265359;

    return mnjs;
}

const mnjs = mnjsFn();

module.exports.mnjs = mnjs;