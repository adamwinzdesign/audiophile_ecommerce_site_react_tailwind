export const billingInputData = [
	{
		inputName: "name",
		inputType: "text",
		inputPlaceholder: "Insert your name",
		label: "Name",
	},
	{
		inputName: "email",
		inputType: "email",
		inputPlaceholder: "Insert your email",
		label: "Email Address",
	},
	{
		inputName: "phone",
		inputType: "tel",
		inputPlaceholder: "Insert your phone number",
		label: "Phone Number",
	},
];

export const shippingInputData = [
	{
		inputName: "address",
		inputType: "text",
		inputPlaceholder: "Insert your address",
		label: "Your Address",
	},
	{
		inputName: "zip",
		inputType: "text",
		inputPlaceholder: "Insert your zip code",
		label: "ZIP Code",
	},
	{
		inputName: "city",
		inputType: "text",
		inputPlaceholder: "Insert your city",
		label: "Your City",
	},
	{
		inputName: "country",
		inputType: "text",
		inputPlaceholder: "Insert your country",
		label: "Country",
	},
];

export const initialValues = {
	name: "",
	email: "",
	phone: "",
	address: "",
	zip: "",
	city: "",
	country: "",
	// paymentMethod: "",
	// eMoneyNumber: "",
	// eMoneyPIN: "",
};
