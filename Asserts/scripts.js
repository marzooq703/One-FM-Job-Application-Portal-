// This is the main Javascript File
const state = {
	passwordState: "hidden",
	errors: [],
};
function showPassword() {
	const closedEye = "./Asserts/images/eye-close.svg";
	const openEye = "./Asserts/images/eye-open.svg";
	const passwordIcon = document.getElementById("show-password");
	const passwordElement = document.getElementById("password");
	const confirmPasswordElement = document.getElementById("confirm-password");
	if (state.passwordState === "hidden") {
		state.passwordState = "shown";
		passwordIcon.src = openEye;
		passwordElement.type = "text";
		confirmPasswordElement.style = "display: none";
	} else if (state.passwordState == "shown") {
		state.passwordState = "hidden";
		passwordIcon.src = closedEye;
		passwordElement.type = "password";
		confirmPasswordElement.style = "";
	}
	console.log(passwordIcon);
}
function login() {
	state.errors = [];
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		state.errors.push("Not A Valid Email");
	if (password === "") state.errors.push("passwords Can't be empty");
	if (state.passwordState === "hidden" && confirmPassword != password)
		state.errors.push("Confirm password has to be the same as password");
	if (state.errors.length === 0) {
		swal("login Successful!", "Advanced All the best", "success");
		return;
	}
	console.log(state);
	swal({
		title: "Please Check",
		text: `${state.errors.map((a) => "\n" + a)} `,
		icon: "warning",
		dangerMode: true,
	});
}
