import LoginForm from "@/app/components/loginForm";
import SignUpForm from "@/app/components/signUpForm";

export default function Home() {
  return (
    <div className="
     flex
     flex-col
     justify-around
     items-center
     w-full
     min-h-screen
    ">
	    <div className="
	      flex
	      flex-col
	      w-full
	      justify-center
	      items-center
	      gap-5
	    ">
		    <h1 className="
						font-bold
						text-4xl">Elysian Conversarius</h1>
		    <p>Elysian Conversarius: Elevating Everyday Chats to Extraordinary Conversations.</p>
	    </div>
	    
	    <main className="
	      p-5
	      border-black
	      border-2
	      bg-gray-300
				rounded-lg
	      w-1/2
				max-w-5xl
	      h-auto">
		    <LoginForm hidden={false}/>
		    <SignUpForm hidden={true}/>
	    </main>
    </div>
  )
}
