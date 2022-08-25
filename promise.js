const mail="mosh@gmail.com";
const pass=12345;

function getIdByAuth(mail,pass){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(mail==="mosh@gmail.com" && pass===12345){
                const data={id:3348};
                
                return resolve(data);
            }else{
                return reject({err:"Auth failed"})
            }
        
        },1000)
    })
}

function getHumanList(id){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(id===3348){
        const details={name:"Konul",surname:"Huseynli",age:19};
                
        return resolve(details);
      }
      else{
          return reject( {err:"No student list found"})
      }
    },2000)
})
}

function Age(age){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(age>18){
            const drinkingAllowed=["true","false"]
            return resolve(drinkingAllowed[0])
        }
        else if(age<18){
            return resolve(drinkingAllowed[1])
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

function Choosenmenu(drinkingAllowed){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(drinkingAllowed==="true"){
            const drinkingList=["* beer"," ** wine","*** water"," **** Carbonated drinks"," ***** Juice and plant drinks"]
            return resolve(drinkingList)
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

function getBeverageId(beveragename){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(beveragename){
      const beverageId={id:1}
            return resolve(beverageId)
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

function getBeverageData(beverageId){
    return new Promise((resolve,reject)=> {
            setTimeout(() =>{
        if(beverageId){
      const beverageData={Listname:drinkingList[4],fruit:"orange",name:"Pulp Tropicana",calories:"110 Calories"}
            return resolve(beverageData)
        }
        else{
            return reject( {err:"No details found"})
        }
    },2000)

})
}

getIdByAuth(mail, pass)
    .then(
     data =>  getHumanList(data.id)
.then(
    details => Age(details.age)
  .then(
    drinkingAllowed => Choosenmenu(drinkingAllowed)
 .then(
    beveragelist => getBeverageId(beveragelist[0])
.then(
    beverageId => getBeverageData(beverageId.id)
 .then(info=>console.log(info))
 .catch(err => console.log(err))
 )

.catch(err => console.log(err))
 )
 .catch(err => console.log(err))
  )
.catch(err => console.log(err))
)
.catch(err => console.log(err))
 )
.catch(err => console.log(err))

































    // getIdByAuth(mail,pass).then(data=>console.log(data.id)).catch(err => console.log(err)
// ) 
// getStudentList(id).then(details=> console.log(details.name,details.surname)).catch(err=> console.log(err))



// getIdByAuth(mail,pass)
// .then(
//     data=>getStudentList(data.id)
//     .then(
//         details => getStudentList(details)
//      .then(details => console.log(details))
//      .catch(err => console.log(err))
//     )
//     .catch(err => console.log(err))
// )
//  .catch(err => console.log(err))


//  getIdByAuth(mail,pass).then(data=>console.log(data.id)).catch(err => console.log(err))           

//  Promise.all([getIdByAuth(mail,pass),getStudentList(3348),getStudentDetails("Aysun")])
//  .then(data => console.log(data))
//  .catch(err=> console.log(err))