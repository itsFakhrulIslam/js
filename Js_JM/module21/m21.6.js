/**
 *^ topic of the discount calculator by function
 ** 1. t-shirt buying discount on quantity
 **     100pcs = 100
 **     101-200pcs = 90
 **     201-...pcs = 70
 */

function tShirtPrice(quantity) {
    console.log(quantity);

    const tShirtPrice_100pcs = 100
    const tShirtPrice_200pcs = 90
    const tShirtPrice_300pcs = 70

    if (quantity <= 100) {
        const total = quantity * tShirtPrice_100pcs
        console.log(total);

    }
    else if (quantity <= 200) {
        const total = quantity * tShirtPrice_200pcs
        console.log(total);
    }
    else {
        const total = quantity * tShirtPrice_300pcs
        console.log(total);
    }

}
tShirtPrice(210)


//^
function discountedShirtPrice(quantity) {
    console.log(quantity);

    const tShirtPrice_100pcs = 100
    const tShirtPrice_200pcs = 90
    const tShirtPrice_300pcs = 70

    if (quantity <= 100) {
        const total = quantity * tShirtPrice_100pcs
        return total
    }
    else if (quantity <= 200) {
        const first100total = 100 * tShirtPrice_100pcs
        const remainingQuantity = quantity - 100
        const remainingTotal = remainingQuantity * tShirtPrice_200pcs
        const total = first100total + remainingTotal
        return total
    }
    else {
        const first100total = 100 * tShirtPrice_100pcs
        const second100total = 100 * tShirtPrice_200pcs
        const remainingQuantity = quantity - 200
        const remainingTotal = remainingQuantity * tShirtPrice_300pcs
        const total = first100total + second100total + remainingTotal
        return total
    }

}
const discountTotal = discountedShirtPrice(290)
console.log(discountTotal);
