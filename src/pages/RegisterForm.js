import { useState } from "react";

function RegisterForm() {
    const [userInfo, setUserData] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        password: "",
        confirmpassword: ""
    })
    const [password, setPassword] = useState({
        cashPassword: ""
    })
    const [errors, setErrors] = useState({
        nameError: "",
        passwordError: "",
        confirmpasswordError: "",
        usernameError: "",
        emailError: ""
    })
    const changeData = (e) => {
        if (e.target.name == "email") {
            setUserData({
                ...userInfo,
                email: e.target.value
            })
            const isValidEmail = (email) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

            console.log(isValidEmail(e.target.value))
            setErrors({
                emailError: e.target.value.length == 0 ? "email field is required" : isValidEmail(e.target.value) && "not a valid email format"
            })
        }
        else if (e.target.name == "name") {
            setUserData({
                ...userInfo,
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameError: e.target.value.length == 0 ? "name field is required" : ""
            })
        }
        else if (e.target.name == "username") {
            setUserData({
                ...userInfo,
                username: e.target.value
            })
            const includeSpase = (stringVal) => /\s/g.test(stringVal);
            if (includeSpase(e.target.value)) {
                console.log("contain")
            }
            setErrors({
                ...errors,
                usernameError: e.target.value.length == 0 ? "username field is required" : includeSpase(e.target.value) && "username can't contain space"
            })
        }
        else if (e.target.name == "password") {
            console.log(e.target.value.length > 8)
            setUserData({
                ...userInfo,
                password: e.target.value
            })
            const validatePassword = (string) => {
                var specialChr = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                const lower = /[a-z]/.test(string);
                const upper = /[a-z]/.test(string);
                const number = /[0-9]/.test(string)

                return lower && upper && number && specialChr.test(string);
            };

            setErrors({
                ...errors,
                passwordError: e.target.value.length < 7 ? "password field is required with min length of 8" : !validatePassword(e.target.value) && "Password Must contain lower, upper chars and numbers"
            })
            setPassword({
                cashPassword: e.target.value
            })
        }
        else { // confirm paww
            setUserData({
                ...userInfo,
                confirmpassword: e.target.value

            })
            setErrors({
                ...errors,
                confirmpasswordError: e.target.value != password.cashPassword ? "passwords don't match" : ""
            })
        }
    }

    const submitUserData = (e) => {
        e.preventDefault()
    }

    // returning val ...
    return (
        <div className="container p-4 mt-4">
            <form onSubmit={(e) => submitUserData(e)}>
                {/* name */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        value={userInfo.name}
                        onChange={(e) => changeData(e)} name="name"
                    ></input>
                    <p className="text-danger"> {errors.nameError}</p>
                </div>
                {/* email */}
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={userInfo.email}
                        onChange={(e) => changeData(e)} name="email"
                    ></input>
                    <p className="text-danger"> {errors.emailError}</p>
                </div>
                {/* username */}
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control"
                        value={userInfo.username}
                        onChange={(e) => changeData(e)} name="username"
                    ></input>
                    <p className="text-danger"> {errors.usernameError}</p>
                </div>
                {/* password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" name="password" className="form-control"
                        value={userInfo.password}
                        onChange={(e) => changeData(e)}
                    ></input>
                    <p className="text-danger"> {errors.passwordError}</p>
                </div>
                {/* consirm pass  */}
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"
                        value={userInfo.confirmpassword}
                        onChange={(e) => changeData(e)}
                    ></input>
                    <p className="text-danger"> {errors.confirmpasswordError}</p>
                </div>
                {/* submit */}
                <div className="mb-3">
                    <button disabled={errors.passwordErr || errors.emailErr && "disabled"} className="btn btn-primary"> Submit </button>
                </div>
            </form>

        </div>

    )
}

export default RegisterForm;