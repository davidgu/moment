import hasOwnProp from '../utils/has-own-prop';

var aliases = {};

// https://app.gethyperdoc.com/t/pgWXrKy9LQqrJof28Wcu
export function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

// https://app.gethyperdoc.com/t/LwYImKqklK9RVfE8KpeC
export function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

// https://app.gethyperdoc.com/t/UJrqzyxvxb3WqsizOrPr
export function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

