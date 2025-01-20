import Link from 'next/link';

const pages = () => {
    return (
        <div>
            <h1>Account</h1>
            <Link href='/'>Request</Link>
            <br />
            <Link href='/account/medication'>Medication</Link>
            <br />
            <Link href='/account/prescription'>Prescription</Link>
            <br />
            <Link href='/account/profile'>Profile</Link>
            <br />
            <Link href='/account/settings'>Settings</Link>
        </div>
    );
};

export default pages;
