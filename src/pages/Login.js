import { useState } from "react";

function Login() {
    const [userLoginData, setUserloginData] = useState({
        email: "",
        password: ""
    })
    const [passwordType, setPasswordType] = useState("password");
    const [errors, setErrors] = useState({
        emailErr: "",
        passwordErr: ""
    })

    const togglePassword = (e) => {
        e.preventDefault()
        console.log("showing password")
        if (passwordType == "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const changeData = (e) => {
        if (e.target.name == "email") {
            setUserloginData({
                ...userLoginData,
                email: e.target.value
            })
            const isEmail = (email) =>
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

            const isValidEmail = (email) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

            if (isValidEmail(e.target.value)) {
                setErrors({
                    ...errors,
                    emailErr: "not a valid email foramt"

                })
            }
            else if (e.target.value.length == 0) {
                setErrors({
                    ...errors,
                    emailErr: "email is required "
                })
            }
            else {
                setErrors({
                    ...errors,
                    emailErr: ""

                })

            }
        }
        else {
            console.log(e.target.value.length >8)
            setUserloginData({
                ...userLoginData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passwordErr: e.target.value.length == 0 ? "Please this age field is required" : e.target.value.length < 7 && "min value is 8"
            })
        }
    }
    const submitUserData = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container p-4 mt-4">
            <form onSubmit={(e) => submitUserData(e)}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={userLoginData.email}
                        onChange={(e) => changeData(e)} name="email"
                    ></input>
                    <p className="text-danger"> {errors.emailErr}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Password</label>
                    <input type={passwordType} className="form-control"
                        value={userLoginData.password}
                        onChange={(e) => changeData(e)} 
                    ></input>
                    <p className="text-danger"> {errors.passwordErr}</p>
                </div>

                <div className="mb-3">
                    <button className="btn btn-outline-primary" name="showPass" onClick={(e) => togglePassword(e)} >Show Password</button>
                </div>

                <div className="mb-3">
                    <button disabled={errors.passwordErr || errors.emailErr && "disabled"} className="btn btn-primary"> Submit </button>
                </div>

            </form>
        </div>
    )


}

export default Login;