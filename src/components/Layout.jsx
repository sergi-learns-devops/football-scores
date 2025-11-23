import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-10 glass">
                <div className="container flex items-center justify-between py-4">
                    <Link to="/" className="flex items-center gap-2 text-primary hover:text-blue-400 transition">
                        <Trophy className="w-6 h-6 md:w-8 md:h-8" />
                        <span className="text-lg md:text-xl font-bold">EuroScore Live</span>
                    </Link>
                    <nav className="flex gap-4 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition">Matches</Link>
                        <a href="#" className="hover:text-primary transition text-muted">News (Coming Soon)</a>
                    </nav>
                </div>
            </header>

            <main className="flex-1 container py-8">
                {children}
            </main>

            <footer className="bg-card border-t border-border py-8 mt-auto">
                <div className="container text-center text-muted text-sm">
                    <p>&copy; {new Date().getFullYear()} EuroScore Live. All rights reserved.</p>
                    <p className="mt-2">Data provided for demonstration purposes.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
