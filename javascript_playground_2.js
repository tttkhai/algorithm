const user = {
    name: 'Heisenberg',
    occupation: 'entrepreneur',
    sayMyName() {
        console.log(this.name);
    }
};
// user.sayMyName()
const sayMyName = user.sayMyName.bind(user);

sayMyName();