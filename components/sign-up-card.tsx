export default function SignUpCard() {
    return (
        <section className="vh-100">
            <h1> Sign Up </h1>
            <form>
                <div>
                    <input type="text" id="first-name-field" placeholder="First Name" />
                    <input type="text" id="last-name-field" placeholder="Last Name" />
                    <input type="text" id="student-number-field" placeholder="Student Number" />
                    <input type="email" id="email-field" placeholder="Email" />
                    <input type="password" id="password-field" placeholder="Password" />
                    <button type="submit"> Done </button>
                </div>
            </form>
        </section >
    )
}