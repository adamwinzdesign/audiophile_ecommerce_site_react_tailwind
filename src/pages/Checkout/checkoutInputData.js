import * as Yup from "yup";

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

export const paymentInputData = [
	{
		inputName: "eMoneyNumber",
		inputType: "text",
		inputPlaceholder: "Insert e-Money Number",
		label: "e-Money Number",
	},
	{
		inputName: "eMoneyPIN",
		inputType: "text",
		inputPlaceholder: "Insert e-Money PIN",
		label: "e-Money PIN",
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
	paymentMethod: "",
	eMoneyNumber: "",
	eMoneyPIN: "",
};

export const validationSchema = Yup.object({
	name: Yup.string()
		.max(40, "Name must be 40 characters or less")
		.required("Name is required")
		.matches(
			/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
			"Name can only contain letters."
		),
	email: Yup.string().email("Wrong format").required("Email is required"),
	phone: Yup.string()
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			"Wrong format"
		)
		.required("Phone number is required"),
	address: Yup.string().required("Address is required"),
	zip: Yup.string()
		.min(5, "Zip must be between 5 and 12 digits")
		.max(12, "Zip must be between 5 and 12 digits")
		.required("Zip is required"),
	city: Yup.string().required("City is required"),
	country: Yup.string().required("Country is required"),
	paymentMethod: Yup.string().required("Payment method is required"),
	eMoneyNumber: Yup.number().required("Enter e-Money Number"),
	eMoneyPIN: Yup.number().required("Enter e-Money PIN"),
});
