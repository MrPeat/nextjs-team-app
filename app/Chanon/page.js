import Link from "next/link";

export default function ChanonProfile() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Chanon's Profile</h1>
      <p><b>Name:</b> Chanon</p>
      <p><b>Student ID:</b> 6720210040</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}