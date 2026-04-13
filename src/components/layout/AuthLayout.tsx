import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-[#18181B] flex-col justify-between p-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/tutox-logo.svg"
            alt="Tutox Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Quote */}
        <div className="text-white">
          <p className="text-sm leading-relaxed text-gray-200">
            &ldquo;Education is not just about going to school and getting a
            degree. It&apos;s about widening your knowledge and absorbing the
            truth about life.&rdquo;
          </p>
          <p className="mt-3 text-sm text-gray-200">— Shakuntala Devi</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}