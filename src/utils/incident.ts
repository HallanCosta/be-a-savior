import { DonationProps } from '../components/organisms/Incident';

export const countTotalDonationsAmount = function(donations: DonationProps[]) {
    return donations.reduce((prev, curr) => prev + curr.amount, 0);
}
  

type EquivalentObjectProps = {
    [key: string]: any
}

export function isEquivalentObject(a: EquivalentObjectProps, b: EquivalentObjectProps) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName: string = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}