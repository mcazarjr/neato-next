import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Requests</h1>
            <Link href='/signin'>Signin</Link>
            <br />
            <Link href='/account'>Dashboard</Link>
        </div>
    );
}
