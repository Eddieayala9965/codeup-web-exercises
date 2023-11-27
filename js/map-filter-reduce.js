const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userLanguages = {}
for (let user of users) {
   if (user.languages.length >= 3) {
       userLanguages[user.name] = user.languages

   }
}
console.log(userLanguages)

const userEmails = users.map((user)=>{
  return user.email
})
console.log(userEmails)


const totalYears = users.reduce((accumalater, year)=>{
return accumalater + year.yearsOfExperience

}, 0)
const averageYears = totalYears / users.length
console.log("Average =>",averageYears)
console.log("Total =>", totalYears)

const longestEmail = users.reduce((acc, user ) => {
    if (user.email.length > acc.length) {
        acc = user.email;
    }
    return acc;
}, "")
console.log(longestEmail)


const listOfNames = users.reduce((acc, user )=>{
    return acc + user.name + ", "
}, "")
console.log(listOfNames)

const languages = users.reduce((acc, user)=> {
    for (let language of user.languages) {
        if (!acc.includes(language)) {
            acc.push(language)
        }
    }
    return acc
}, [0])

console.log(languages)

