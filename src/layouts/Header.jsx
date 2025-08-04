import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 shadow-md flex justify-between items-center rounded-t-2xl">
            <h1 className="text-2xl font-semibold tracking-tight">🎲 Game Lab</h1>
        </div>
    );
}
export default Header;