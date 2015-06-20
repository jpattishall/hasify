/**
 * Extend passed object with `has` method. Ex: obj.has('child.property');
 * Returns true if "obj.child.property" exists, and not undefined
 * @param {object} obj
 * @param {string} str
 * @return {boolean}
 */
function hasify(obj, str) {

    obj = obj === undefined ? {} : obj;

    if (str) {
        return has.call(obj, str);
    }

    function has(path) {
        var working = this,
            isValid = true,
            node;

        path = path.split('.');

        do {
            node = path.shift();
            if (node in working) {
                working = working[node];
                continue;
            } else {
                isValid = false;
                break;
            }
        } while (path.length > 0);

        return isValid;
    }

    if (obj && !(obj.has)) {
        obj.has = has;
    }

    return obj;
}

/**
 * Export as node module
 */
module.exports = hasify;
