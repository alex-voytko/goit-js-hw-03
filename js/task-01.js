const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    updateHobby(newHobby) {
        this.hobby = newHobby
    },
    updatePremium(newPremium) {
        this.premium = newPremium
    }
};
user.mood = 'happy'
user.updateHobby('skydiving')
user.updatePremium(false)
//Lets check:
console.table(user) //Everything is OK:)

const keys = Object.keys(user)
console.log(keys)

for (const key in user) {
    console.log(key)
    console.log(user[key])
}


