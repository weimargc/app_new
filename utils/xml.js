import convert from 'xml-js';
const options = {compact: true, ignoreComment: true, spaces: 4};

export const convertToXml = (json) => {
    return convert.json2xml(json, options);
};
