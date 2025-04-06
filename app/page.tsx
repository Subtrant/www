import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";

export default function RootPage() {
  return (
    <main className="container mx-auto px-4 py-6 text-center max-w-5xl w-full">
      <h1 className="text-3xl font-bold">Welcome to Subtrant Softworks!</h1>
      <p className="mt-4">
        Software development enthusiasts from the City of Education, Malang.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="https://github.com/Subtrant"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaGithub />
        </Link>
        <Link
          href="mailto:contact@subtrant.icu"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <IoMail />
        </Link>
        <Link
          href="https://discord.gg/JZQ2RRNk"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaDiscord />
        </Link>
      </div>
      <div className="container flex mt-4 justify-center">
        <Image
          src="/subtrantanime.png"
          alt="Subtrant Anime"
          width={150}
          height={150}
        />
      </div>
    </main>
  );
}
