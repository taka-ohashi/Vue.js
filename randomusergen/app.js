const app = Vue.createApp({
    /*
    template: '<h1>Hello {{firstName}} </h1>',
    */
    data() {
        return {
            firstName: 'Takanori',
            lastName: 'Ohashi',
            email: 'user1@gmail.com',
            gender: 'male',
            picture: 'https://nosegfault.s3.us-west-1.amazonaws.com/js_440x250.png'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results);
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')




