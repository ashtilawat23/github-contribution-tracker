const temp = new Map();

const data = [
    {
        user: {
            login: "username",
        }
    },
    {
        user: {
            login: "username",
        }
    },
    {
        user: {
            login: "username1",
        }
    },
    {
        user: {
            login: "username1",
        }
    },
];

data.forEach((el) => {
    if (temp.has(el.user.login)) {
        temp.set(el.user.login, temp.get(el.user.login) + 1)
    }
    else {
        temp.set(el.user.login,1);
    }
});

console.log(temp);