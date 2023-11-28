import React, { FC } from 'react'

interface state {
	hidden: boolean
}
const SignUpForm:  FC<state> =  ({hidden}) => {
	return (
		<>
			<div className={`
				${hidden ? "hidden" : "flex" }
				w-full
				flex-col
				justify-around
				items-center
				gap-5
				`}>
				<div className="
					flex
					flex-col
					justify-center
					items-center
					w-full">
					<h1 className="
						font-bold
						text-2xl">Sign Up</h1>
					<p className="
						font-medium">Sign Up to Continue</p>
				</div>

				<form className="
					flex
					flex-col
					gap-5
					items-center
					justify-center">
					<input type="text" required placeholder="Your name." className="
						border-2
						border-black
						p-2
						rounded-md"/>
					<input type="" required placeholder="Your email." className="
						border-2
						border-black
						p-2
						rounded-md"/>
					<input type="text" required placeholder="Your password" className="
						border-2
						border-black
						p-2
						rounded-md"/>
					<input type="text" required placeholder="Re-type your password" className="
						border-2
						border-black
						p-2
						rounded-md"/>
					<button className="
						rounded-md
						px-8
						py-2
						border-black
						border-2
						font-bold">Sign Up</button>
				</form>
			</div>
		</>
	)
}

export default SignUpForm
