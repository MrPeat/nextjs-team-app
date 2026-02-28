import Link from "next/link";

export default function BoyProfile() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Boy's Profile</h1>
      <p><b>Name:</b> Boy</p>
      <p><b>Student ID:</b> ใส่รหัสนิสิต</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}