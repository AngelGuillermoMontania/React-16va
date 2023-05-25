import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HELLO</h1>
      <Link href="/buscar">IR A BUSCAR</Link>
    </main>
  );
}
