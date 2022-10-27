let map=new Map()

//a) Add data for 3 students (use map functions)
map.set("id",[10,20,30])
map.set("Names",["venky","Jim","Raj"])
map.set("Scores",[100,200,300])
console.log(map)

// b) Get Student Names using map functions
let stuNames=map.get("Names")
console.log(stuNames)

//c) Delete Student Scores using map function
let scoreDel=map.delete("Scores")
console.log(scoreDel)
console.log(map)