// builtin function : shift(), unShift(), push(), dan pop()
// dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

// syarat :
// - Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// - Masukkan name dan score dari student ke class yang dia ikuti.
// - Student yang tidak lulus tidak perlu ditampilkan

function graduates(students) {
  // Code disini
  let result = {};
  for (i = 0; i < students.length; i++) {
    // console.log(students[i].score);
    if (result[students[i].class] === undefined) {
      result[students[i].class] = [];
    }

    if (students[i].score > 75) {
      let datas = {};

      datas.name = students[i].name;
      datas.score = students[i].score;
      //   console.log(datas);
      result[students[i].class].push(datas);
    }
  }
  return result;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

// console.log(graduates([])); //{}
