import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-screen">
      <div className="w-[50%] bg-primary-foreground flex flex-col justify-between ">
        <header className="m-10  flex flex-row gap-2 items-center ">
          <LinkedInLogoIcon />
          <h1 className="font-bold"> Acme Inc</h1>
        </header>
        <footer className="m-10 flex flex-col gap-2 ">
          <h1>
            “This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.”
          </h1>
          <span className="text-sm">Igor Santos</span>
        </footer>
      </div>
      <div className="flex items-center justify-center w-[50%] relative">
        <Link href="#" className="absolute top-4 right-8 hover:bg-muted py-2 px-4 rounded-sm text-sm">Login</Link>
        <div className="flex items-center justify-center gap-2 flex-col w-[50%]">
          <h1 className="text-2xl">Create an account</h1>
          <p className="text-muted-foreground text-sm">
            Enter your email below to create your account
          </p>
          <form className="flex flex-col w-full items-center justify-center gap-2 mt-6">
            <Input placeholder="name@example.com" type="email" required />
            <Button className="w-full">Sing In With Email</Button>
            <div className="flex flex-row w-full items-center my-4 ">
              <div className="w-[80%] h-[1px] bg-muted-foreground"></div>
              <span className=" w-full text-sm text-muted-foreground ml-2 ">
                OR CONTINUE WITH
              </span>
              <div className="w-[80%] h-[1px] bg-muted-foreground"></div>
            </div>
            <Button
              variant={"outline"}
              className="w-full flex flex-row gap-2 items-center "
            >
              <GitHubLogoIcon /> Github{" "}
            </Button>
          </form>
          <div className="w-[90%]">
            <p className="text-muted-foreground text-sm">
              {" "}
              By clicking continue, you agree to our{" "}
              <Link href="#" className="underline hover:text-primary"> Terms of Service</Link> {" "}
              and <Link href="#" className="underline hover:text-primary">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
