import Link from "next/link";

export default function Test() {
   const message="hello world";
  const items=[1,2,3];
    return (
    <main className="min-h-screen bg-slate-950 p-8">
       <h1 className="text-3xl font-bold text-white">Test Page</h1>
       <p className="mt-4 text-slate-300">{message}</p>
       <div className="mt-6 space-y-4">
        {items.map((item, index) => (
            <Link key={index} href={`/test/${item}`} className="block text-emerald-300">
            Item {item}
            </Link>
        ))}
      </div>
    </main>
  );
}