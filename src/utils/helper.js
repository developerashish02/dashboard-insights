

export const validation = (values) => {
    const errors = {};
    const { email, password } = values;
    // validation email
    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "invalid Email Address";
    }

    // validation password

    if (password.length < 4) {
        errors.password = "Password should be at least 4 characters long";
    } else if (!/[a-zA-Z]/.test(password)) {
        errors.password = "Password should contain at least one letter";
    } else if (!/\d/.test(password)) {
        errors.password = "Password should contain at least one digit";
    }

    return errors;
};

export const convertDate = (newDate) => {

    const date = new Date(newDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return { day, month, year };

}

export const handleLogOut = () => {
    localStorage.removeItem('token');
}