import { DownloadIcon, MegaphoneIcon, UserIcon } from "@/assets";

function Header() {
  return (
    <div>
      <header className="flex items-center border border-b shadow-sm justify-between w-full z-20 py-4 px-12">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">
          Brandly
        </h2>
        {/* <h2 className="text-2xl font-bold bg-clip-text text-transparent">
          Brandly
        </h2> */}

        <div className="flex space-x-6 items-center justify-center text-zinc-800">
          <MegaphoneIcon className="text-zinc-800 size-6" />
          <DownloadIcon className="text-zinc-800 size-6" />
          <UserIcon className="text-zinc-800 size-6" />
        </div>
      </header>
      <section></section>
    </div>
  );
}

export default Header;
