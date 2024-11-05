import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#000000] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center space-x-2">
                        <Image src="/RTI-logo-rondel-100.png" alt="Round Table International Logo" width={40} height={40} />
                        <div>
                            <h3 className="text-xl font-semibold text-[#FBAF33]">Europe One 2027</h3>
                            <p>Norwich, UK • June 15-18, 2027</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/NorwichNo1RoundTable" target="_blank" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://x.com/RoundTableNo1" target="_blank" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                            <Twitter size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/roundtablenorwich1/" target="_blank" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                            <Instagram size={24} />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2024 Europe One 2027. All rights reserved.</p>
                    <p>Celebrating 100 Years of Round Table</p>
                </div>
            </div>
        </footer>
    );
}
