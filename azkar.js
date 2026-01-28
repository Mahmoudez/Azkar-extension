const azkarList = [
    "سبحان الله",
    "الحمد لله",
    "لا إله إلا الله",
    "الله أكبر",
    "لا حول ولا قوة إلا بالله",
    "أستغفر الله العظيم وأتوب إليه",
    "اللهم صلي علي  محمد",
    "سبحان الله وبحمده، سبحان الله العظيم"
];

export function getRandomZikr() {
    const index = Math.floor(Math.random() * azkarList.length);
    return azkarList[index];
}   