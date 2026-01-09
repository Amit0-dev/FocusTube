const Login = () => {

    // Not Working right now
    const loginWithGoogle = () => {
        window.location.href = "http://localhost:8080/api/v1/auth/google";
    };

    return (
        <div className="mt-5">
            <button
                onClick={loginWithGoogle}
                className="px-5 py-2 bg-linear-to-r from-orange-300 via-orange-400 to-orange-500 rounded-xl text-white font-bold cursor-pointer"
            >
                Continue with Google
            </button>
        </div>
    );
};

export default Login;
