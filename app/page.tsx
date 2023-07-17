import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/application" className="font-bold">
        Go to app
      </Link>
      <Link href="/api/auth/signout" className="font-bold">
        deconnecte
      </Link>
    </div>
  );
}
