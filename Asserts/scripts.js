// This is the main Javascript File
const googleDetails = JSON.parse(window.localStorage.getItem("googleDetails"));
console.log(googleDetails);
const state = {
	passwordState: "hidden",
	errors: [],
	jobOpeningsFields: {
		label: "Job Opening",
		placeholder: "Select The Job Yopu Want To Apply",
		dropdownItems: [
			{
				name: "erf-2020-00001-designer-it-onefm",
			},
			{
				name: "security",
			},
			{
				name: "erf-2020-00002-administrative-officer-grd-onefm",
			},
			{
				name: "sr-accountant",
			},
			{
				name: "whats-this",
			},
			{
				name: "number-one-manager",
			},
			{
				name: "erf-2020-00003-business-development-manager-sales-onefm",
			},
			{
				name: "erf-2020-00007-full-stack-javascript-developer-it-onefm",
			},
			{
				name: "erf-2020-00006-security-guard-operations-onefm",
			},
			{
				name: "erf-2020-00005-security-guard-operations-onefm",
			},
			{
				name: "erf-2020-00010-sales-manager-sales-onefm",
			},
			{
				name: "erf-2020-00014-digital-marketing-officer-marketing-onefm",
			},
			{
				name: "erf-2020-00011-airport-security-officer-operations-onefm",
			},
		],
	},
	section1Fields: [
		{ name: "First Name", id: "first-name", type: "text", defaultValue: googleDetails.name[0] },
		{ name: "Second Name", id: "second-name", type: "text" },
		{ name: "Last Name", id: "last-name", type: "text", defaultValue: googleDetails.name[1] },
		{ name: "Gender", id: "gender", type: "text" },
		{ name: "Religion", id: "religion", type: "text" },
		{ name: "Date Of Birth", id: "dob", label: "Date of Birth on the Passport", type: "date" },
		{
			name: "Place Of Birth",
			id: "pob",
			label: "Place of Birth on the Passport",
			type: "text",
		},
		{ name: "Mateial Status", id: "matrerial-status", type: "text" },
		{ name: "Height In CM", id: "height", type: "text" },
	],
	section2Fields: [
		{ name: "Email", id: "email", type: "email", defaultValue: googleDetails.email },
		{ name: "Applicant Password", id: "password", type: "text" },
		{ name: "Primary Contact Number", id: "c-1", type: "text" },
		{ name: "Secondary Contact Number", id: "c-2", type: "text" },
	],
	section3Fields: [{ name: "Language", id: "lang", type: "text" }],
	section4Fields: [
		{ name: "Passport Number", id: "Passport-Number", type: "text" },
		{ name: "Passport Holder of", id: "Passport-Holder-of", type: "text" },
		{ name: "Passport Issued on", id: "Passport-Issued-on", type: "date" },
		{ name: "Passport Expire on", id: "Passport-Expire-on", type: "date" },
		{ name: "Passport Type", id: "Passport-Type", type: "text" },
	],
	section5Fields: [
		{
			name: "I Have a Valid Visa in Kuwait",
			id: "I-Have-a-Valid-Visa-in-Kuwait",
			type: "checkbox",
		},
		{ name: "Visa Type", id: "Visa-Type", type: "text" },
		{ name: "Passport Issued on", id: "Passport-Issued-on", type: "text" },
		{ name: "Civil ID Number", id: "Civil-ID-Number", type: "text" },
		{ name: "Civil ID Valid Till", id: "Civil-ID-Valid-Till", type: "date" },
		{
			name: "Are You in Kuwait at Present:",
			id: "Are-You-in-Kuwait-at-Present:",
			type: "checkbox",
		},
	],
	section6Fields: [
		{
			name: "Do You have Previous Work Experience",
			id: "I-Have-a-in-Kuwait-1",
			type: "text",
		},
		{ name: "Current Employer", id: "Current Employer", type: "text" },
		{
			name: "Current Employer Website Link",
			id: "Current Employer Website Link:",
			type: "text",
		},
		{ name: "Employment Start Date", id: "Employment Start Date:", type: "date" },
		{ name: "Employment End Date", id: "Employment End Date:", type: "date" },
		{
			name: "Current Job Title",
			id: "Current title",
			type: "text",
		},
		{
			name: "Current Monthly Salary in KWD",
			id: "Current Monthly Salary in KWD",
			type: "text",
		},
		{
			name: "Country of Employment",
			id: "Country of Employment",
			type: "text",
		},
		{
			name: "Notice Period in Days",
			id: "Notice Period in Days",
			type: "text",
		},
	],
	section7Fields: [
		{
			name: "What is Your Highest Educational Qualification",
			id: "What is Your Highest Educational Qualification",
			type: "text",
		},
		{ name: "University:", id: "University", type: "text" },
		{
			name: "Specialization",
			id: "Specialization",
			type: "text",
		},
	],
	section8Fields: [
		{
			name: "Rotation Shift",
			id: "Rotation Shift",
			type: "text",
		},
		{ name: "Night Shift", id: "Night Shift", type: "text" },
		{
			name: "Type of Travel",
			id: "Type of Travel",
			type: "text",
		},
		{ name: "Type of Driving License", id: "Type of Driving License", type: "date" },
	],
	section9Fields: [
		{
			name: "Basic Skill",
			id: "Basic Skill",
			type: "text",
		},
	],
};
const serverData = async () => {
	const jobOpenings = await fetch("https://dev.one-fm.com/api/resource/Job Opening");
};
const selectPosting = () => {
	const selectPost = `<div class="form-group">
	<label for="exampleFormControlSelect1">Job Openings</label>
	<select class="form-control" id="exampleFormControlSelect1">
		${state.jobOpeningsFields.dropdownItems.map((a) => `<option>${a.name}</option>`)}
	</select>
	</div>`;
	let selectPostElement = document.getElementById("selectPost");
	selectPostElement.innerHTML = selectPost;
};
serverData();
const showPassword = () => {
	const closedEye = "./Asserts/images/eye-close.svg";
	const openEye = "./Asserts/images/eye-open.svg";
	const passwordIcon = document.getElementById("show-password");
	const passwordElement = document.getElementById("password");
	const confirmPasswordElement = document.getElementById("confirm-password");
	const passwordHelpText = document.getElementById("password-help");
	if (state.passwordState === "hidden") {
		state.passwordState = "shown";
		passwordIcon.src = openEye;
		passwordElement.type = "text";
		confirmPasswordElement.style = "display: none";
		passwordHelpText.style = "display: none";
	} else if (state.passwordState == "shown") {
		state.passwordState = "hidden";
		passwordIcon.src = closedEye;
		passwordElement.type = "password";
		confirmPasswordElement.style = "";
		passwordHelpText.style = "";
	}
	console.log(passwordIcon);
};
const login = () => {
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
		swal("login Successful!", "Advanced All the best for your Interview Process", "success");
		window.localStorage.setItem("oneFmToken", "dummyTokenAsOfNow");
		window.localStorage.setItem("sectionState", "section_0");
		window.location = "form.html";
		return;
	}
	console.log(state);
	swal({
		title: "Please Check",
		text: `${state.errors.map((a) => "\n" + a)} `,
		icon: "warning",
		dangerMode: true,
	});
};
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	let fullName = profile.getName().split(" ");
	let email = profile.getEmail();
	details = { name: fullName, email };
	// let firstName = fullName[0];
	// let lastName, secondName;
	// if (fullName.length > 1)
	// 	secondName = fullName[1], lastName = fullName[2];
	// else
	// 	lastName = fullName[1];
	window.localStorage.setItem("oneFmToken", "dummyTokenAsOfNow");
	window.localStorage.setItem("googleDetails", JSON.stringify(details));
	window.localStorage.setItem("sectionState", "section_0");
	window.location = "form.html";
}
const form = () => {
	let googleDetails = window.localStorage.getItem("googleDetails");
	let parsedGoogleDetails = JSON.parse(googleDetails);
	console.log(JSON.parse(googleDetails));
	console.log(parsedGoogleDetails);
	if (!window.localStorage.getItem("oneFmToken")) {
		alert("Please Login");
		window.location = "./";
	}
	if (window.localStorage.getItem("sectionState") == "section_0") {
		window.localStorage.setItem("sectionState", "section_1");
	}
	const fieldsData = {
		// 	section_0: `<div class="form-group">
		// 	<label for="exampleFormControlSelect1">Job Openings</label>
		// 	<select class="form-control" id="exampleFormControlSelect1">
		// 		${state.jobOpeningsFields.dropdownItems.map((a) => `<option>${a.name}</option>`)}
		// 	</select>
		// </div>`,
		section_1: state.section1Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" value="${a.defaultValue ? a.defaultValue : ""}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_2: state.section2Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" value="${a.defaultValue ? a.defaultValue : ""}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_3: state.section3Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_4: state.section4Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_5: state.section5Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_6: state.section6Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_7: state.section7Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_8: state.section8Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_9: state.section9Fields
			.map(
				(a) => `<div class="form-group">
		<label for="${a.id}">${a.name}</label>
		<input type="${a.type}" class="form-control" id="${
					a.id
					}" aria-describedby="emailHelp" placeholder="Enter Your ${a.name}">
		${a.label ? `<small class="form-text text-muted">${a.label}</small>` : ""}
	  </div>`
			)
			.join(""),
		section_10: `<p>Upload The Required Documents Here</p><div class="custom-file">
			<input type="file" class="custom-file-input" id="validatedCustomFile" required>
			<label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
			<div class="invalid-feedback">Example invalid custom file feedback</div>
		  </div>`,
		section_11: `<h1>Thanks For Submiting, We'll Get Back To You Shortly!</h1>`,
	};
	const replaceElement = document.getElementById("form-app");
	console.log("current state => " + window.localStorage.getItem("sectionState"));
	replaceElement.innerHTML = fieldsData[window.localStorage.getItem("sectionState")];
};

const previous = () => {
	const remainingSections = document.getElementById("section-remaining");
	if (window.localStorage.getItem("sectionState") == "section_0") {
		window.location = "./";
	}
	else {
		const currentSectionNumber = window.localStorage
			.getItem("sectionState")
			.charAt(window.localStorage.getItem("sectionState").length - 1);
		const substractedNumber = Number(currentSectionNumber) - 1;
		let remaining = 10 - substractedNumber;
		remainingSections.innerHTML = remaining;
		let tempSectionState = window.localStorage.getItem("sectionState");
		tempSectionState = tempSectionState.slice(0, -1) + substractedNumber;
		window.localStorage.setItem("sectionState", tempSectionState);
		form();
	}
};
const next = () => {
	const remainingSections = document.getElementById("section-remaining");
	const currentSectionNumber = window.localStorage
		.getItem("sectionState")
		.charAt(window.localStorage.getItem("sectionState").length - 1);
	const addedNumber = Number(currentSectionNumber) + 1;
	let remaining = 10 - addedNumber;
	if (remaining < 0) remaining = "no";
	remainingSections.innerHTML = remaining;
	let tempSectionState = window.localStorage.getItem("sectionState");
	tempSectionState = tempSectionState.slice(0, -1) + addedNumber;
	window.localStorage.setItem("sectionState", tempSectionState);
	console.log(window.localStorage.getItem("sectionState"));
	if (window.localStorage.getItem("sectionState") == "section_12") {
		window.location = "./";
	}
	form();
};
