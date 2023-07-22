import {HeartIcon} from "@heroicons/react/24/solid"

function Footer() {
  return (
    <div className="flex absolute z-40 bottom-0 left-0 gap-0  w-full items-center justify-center p-2 bg-black text-white font-mono text-base">
      <h1 className=" scale-75">Made with </h1>
      <HeartIcon className="h-6 w-6 text-red-500 scale-75" />
      <h1 className=" scale-75"> by</h1>
      <p className="text-transparent bg-gradient-to-r from-green-500 to-green-300 bg-clip-text scale-75">
        CyberAakash
      </p>
    </div>
  );
}

export default Footer;
