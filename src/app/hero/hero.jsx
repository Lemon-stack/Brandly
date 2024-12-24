import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="bg-gray-50 h-full">
      <header className="border-b px-4 py-5">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl fomt-medium">Brandly</span>
            </Link>
            <nav className="flex gap-6">
              <Link
                to="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Templates
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button> */}
            <button className="">Get Started</button>
          </div>
        </div>
      </header>
    </div>
  );
}
