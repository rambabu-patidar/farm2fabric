import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// INPUT VALUES ARE HARDCODED.

const SignupForm = ({ setIsLoggedIn }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [accountType, setAccountType] = useState("farmers");

	function changeHandler(event) {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	}

	function submitHandler(event) {
		event.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		setIsLoggedIn(true);
		toast.success("Account Created");
		const accountData = {
			...formData,
		};

		const finalData = {
			...accountData,
			accountType,
		};

		console.log("printing Final account data ");
		console.log(finalData);

		if (accountType === "farmers") {
			navigate("/farmers-dashboard");
		} else if(accountType === "buyers") {
			navigate("/buyers-dashboard");
		} else {
			navigate("/service-provider-dashboard")
		}
	}

	return (
		<div>
			{/* Farmers-Buyers tab */}
			<div className="flex bg-green-200 p-1 gap-x-1 my-3 rounded-full max-w-max">
				<button
					className={`${
						accountType === "farmers"
							? "bg-green-700 text-white"
							: "bg-transparent text-richblack-200"
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType("farmers")}
				>
					For Farmers
				</button>

				<button
					className={`${
						accountType === "buyers"
							? "bg-green-700 text-white"
							: "bg-transparent text-richblack-200"
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType("buyers")}
				>
					For Buyers
				</button>

				<button
					className={`${
						accountType === "service_providers"
							? "bg-green-700 text-white"
							: "bg-transparent text-richblack-200"
					} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType("service_providers")}
				>
					For Service Providers
				</button>
			</div>

			<form onSubmit={submitHandler}>
				{/* first name and lastName */}
				<div className="flex gap-x-4 mt-[20px]">
					<label className="w-full">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							First Name<sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="firstName"
							onChange={changeHandler}
							placeholder="Enter First Name"
							// value={formData.firstName}
							value="Kushagra"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
					</label>

					<label className="w-full">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							Last Name<sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="lastName"
							onChange={changeHandler}
							placeholder="Enter Last Name"
							// value={formData.lastName}
							value="Mishra"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
					</label>
				</div>
				{/* email Add */}
				<div className="mt-[20px]">
					<label className="w-full mt-[20px]">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							Email Address<sup className="text-pink-200">*</sup>
						</p>
						<input
							type="email"
							name="email"
							onChange={changeHandler}
							placeholder="Enter Email Address (optional)"
							//value={formData.email}
							value="test@test.com"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
					</label>
				</div>
				{/* For mobile number */}
				<div className="mt-[20px]">
					<label className="w-full mt-[20px]">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							Mobile Number<sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="tel"
							name="mobile"
							onChange={changeHandler}
							placeholder="10-digit number"
							// value={formData.mobile}
							value="9987421365"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
					</label>
				</div>
				{/* createPassword and Confirm Password */}
				<div className="w-full flex gap-x-4 mt-[20px]">
					<label className="w-full relative">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							Create Password<sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showPassword ? "text" : "password"}
							name="password"
							onChange={changeHandler}
							placeholder="Enter Password"
							// value={formData.password}
							value="123"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
						<span
							className="absolute right-3 top-[38px] cursor-pointer"
							onClick={() => setShowPassword((prev) => !prev)}
						>
							{showPassword ? (
								<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
							) : (
								<AiOutlineEye fontSize={24} fill="#AFB2BF" />
							)}
						</span>
					</label>

					<label className="w-full relative">
						<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
							Confirm Password<sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showConfirmPassword ? "text" : "password"}
							name="confirmPassword"
							onChange={changeHandler}
							placeholder="Confirm Password"
							// value={formData.confirmPassword}
							value="123"
							className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
						/>
						<span
							className="absolute right-3 top-[38px] cursor-pointer"
							onClick={() => setShowConfirmPassword((prev) => !prev)}
						>
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
							) : (
								<AiOutlineEye fontSize={24} fill="#AFB2BF" />
							)}
						</span>
					</label>
				</div>
				<button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
					Create Account
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
