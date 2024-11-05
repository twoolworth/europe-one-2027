'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-[#1D1D1A] bg-opacity-90 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/RTI-logo-rondel-100.png" alt="Round Table International Logo" width={50} height={50} />
                    <span className="text-2xl font-bold text-[#FBAF33]">Europe One 2027</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="#about" className="hover:text-[#FBAF33] transition-colors">
                        About
                    </Link>
                    <Link href="#program" className="hover:text-[#FBAF33] transition-colors">
                        Program
                    </Link>
                    <Link href="#pre-tour" className="hover:text-[#FBAF33] transition-colors">
                        Pre-Tour
                    </Link>
                    <Link href="#register" className="hover:text-[#FBAF33] transition-colors">
                        Register Now
                    </Link>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#FBAF33]">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#000000] p-4">
                    <Link href="#about" className="block py-2 hover:text-[#FBAF33] transition-colors">
                        About
                    </Link>
                    <Link href="#program" className="block py-2 hover:text-[#FBAF33] transition-colors">
                        Program
                    </Link>
                    <Link href="#pre-tour" className="block py-2 hover:text-[#FBAF33] transition-colors">
                        Pre-Tour
                    </Link>
                    <Link href="#register" className="block py-2 hover:text-[#FBAF33] transition-colors">
                        Register Now
                    </Link>
                </div>
            )}
        </header>
    );
}
