import React, { FC } from 'react'

interface state {
	hidden: boolean
}

const LoginForm: FC<state> = ({hidden}) => {
	return (
		<>
			<div className={`
				${hidden ? "hidden" : "flex" }
				flex-col
				justify-around
				items-center
				max-w-5xl`}>
				<form className="
					flex
					flex-col
					gap-5
					items-center
					justify-center">
					<div>
						<input type="text" required placeholder="E-Mail" className="
						border-2
						border-black
						p-2
						rounded-md"/>
						<input type="text" required placeholder="Password" className="
						border-2
						border-black
						p-2
						rounded-md"/>
					</div>
					<button className="
						rounded-md
						px-8
						py-2
						border-black
						border-2
						font-bold">Log In</button>
				</form>
				<button className="
						rounded-md
						px-8
						py-2
						border-black
						border-2
						font-bold">I don&apos;t have an account.</button>
			</div>
		</>
	)
}

export default LoginForm