// FUNCTION graduates(studentData)
// 	IMAGINE studentData = {name: studentName, score: studentScore, class: className}
// 	DECLARE result AS OBJECT
// 	DECLARE KKM WITH constant(75)
// 		FOR student OF students
// 			{ name, score, class: className } = student
// 			IF result[className] IS EMPTY
// 				result[className] = []
// 			IF score > 75
// 				{name, score} PUSH TO result[className]

function graduates(students) {
    // Code disini
    let result = {} // why this is assigned with empty object? idk broww wkwk
    const KKM = 75 // KKM = Kriteria Ketuntasan Minimal = Batas nilai paling rendah dari siswa

    for (const student of students) {
        // console.log(student);
        const { name, score, class: className } = student // destructuring object
        
        // kondisi jika kelas kosong
        if (!result[className]) {
			result[className]=[] // assign dg array kosong
        }

        // kondisi jika student.score melampaui KKM atau di bawah KKM
        if (score > KKM) {
            result[className].push({name, score}) // push nama dan skor ke array berdasarkan kelas
        }
        // jika skor di bawah KKM maka result hanya berisi kelas dg array kosong 
        
    }
    return result
  }
  
  // pemanggilan fungsi
  console.log(graduates([
    {
		name: 'Dimitri',
		score: 90,
		class: 'foxes'
    },
    {
		name: 'Alexei',
		score: 85,
		class: 'wolves'
    },
    {
		name: 'Sergei',
		score: 74,
		class: 'foxes'
    },
    {
		name: 'Anastasia',
		score: 78,
		class: 'wolves'
    }
  ]));
  
//   {
//     foxes: [
//       { name: 'Dimitri', score: 90 }
//     ],
//     wolves: [
//       { name: 'Alexei' , score: 85 },
//       { name: 'Anastasia', score: 78 }
//     ]
//   }
  
  console.log(graduates([
    {
		name: 'Alexander',
		score: 100,
		class: 'foxes'
    },
    {
		name: 'Alisa',
		score: 76,
		class: 'wolves'
    },
    {
		name: 'Vladimir',
		score: 92,
		class: 'foxes'
    },
    {
		name: 'Albert',
		score: 71,
		class: 'wolves'
    },
    {
		name: 'Viktor',
		score: 80,
		class: 'tigers'
    }
  ]));
  
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
  
  
  console.log(graduates([])); //{}