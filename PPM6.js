let dataSiswa = [
    {
        nama: "Budi Sastro",
        nilai: {
            "Programming": 90,
            "Database" : 60
        }
    },
    {
        nama: "Raden Rahmad",
        nilai: {
            "Programming": 60,
            "Database" : 80
        }
    },
    {
        nama: "Ahmad Latif",
        nilai: {
            "Programming": 75,
            "Database" : 90
        }
    },
];

let program = []
let data = []
let text1 = "'Lulus Programming :'"
let text2 = "'Lulus Database :'"
for (let i=0; i<dataSiswa.length; i++){
    let value1 = dataSiswa[i].nilai["Programming"];
    let value2 = dataSiswa[i].nilai["Database"];
    
    if (value1 > 70) {
        program.push(dataSiswa[i].nama)
    }
    else{
        
    } 
    if (value2 > 70) {
        data.push(dataSiswa[i].nama)
    }
    else{
      
    }
}

console.log(text1, program);
console.log(text2, data);