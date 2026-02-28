import Link from "next/link";

export default function PeatProfile() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Team Portfolio - Developed by Peat</h1>
      <p><b>Name:</b> Peat</p>
      <p><b>Student ID:</b> 6720210048</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}