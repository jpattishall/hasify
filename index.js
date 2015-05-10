/**
 * Extend passed object with `has` method. Ex: obj.has('child.property');
 * Returns true if "obj.child.property" exists, and not undefined
 * @param {object} obj
 * @return {boolean}
 */
function hasify(obj) {

    var obj = obj === undefined ? {} : obj;

    function has(path) {
        var path = path.split('.'),
            node,
            working = this,
            isValid = true;

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
