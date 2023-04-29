let year = parseInt(prompt("nhap so nam "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert( `${year} la nam nhuan`);
} else {
    alert( ` ${year} khong la nam nhuan`);
}