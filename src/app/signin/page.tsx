import Link from 'next/link';
const pages = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <Link href='/'>Home</Link>
            <Link href='/signup'>Sign Up</Link>
        </div>
    );
};

export default pages;
