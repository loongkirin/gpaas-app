import AuthForm from "./components/AuthForm";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-10 px-8 bg-gray-100">
      <div className="mx-auto max-w-md flex flex-row justify-center justify-items-between items-center">
        <Logo/>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-700 pl-3">GPaaS Login</h2>
      </div>
      <AuthForm/>
    </div>
  )
}