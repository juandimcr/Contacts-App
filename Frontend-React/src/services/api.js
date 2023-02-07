// URL for API
const apiURL = 'http://localhost:3000/api/v1'

export async function loginUser(user) {
    const userForLogin = {
        username: user.floating_username,
        password: user.floating_password,
    }
    const dataFetch = await fetch(`${apiURL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForLogin),
    });
    const dataJSON = await dataFetch.json();
    return ( {status: dataFetch.status, dataJSON} )
}

export async function registerUser(user) {
    const userForRegister = {
        username: user.floating_username,
        password: user.floating_password,
        fullname: user.floating_floating_fullname,
        profileImg: user.floating_floating_image,
        email: user.floating_email,
    }
    const dataFetch = await fetch(`${apiURL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForRegister),
    });
    const dataJSON = await dataFetch.json();
    return ( {status: dataFetch.status, dataJSON} )
}
