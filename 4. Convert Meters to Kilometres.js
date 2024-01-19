function convertMetersToKilometres(meters) {
    let m = Number(meters);
    let km = m / 1000;
    let res = km.toFixed(2);

    console.log(res);
}
convertMetersToKilometres(1852);
//convertMetersToKilometres(798);