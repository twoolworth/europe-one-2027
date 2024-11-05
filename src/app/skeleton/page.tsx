import { ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function LandingPage() {
    return (
        <div className="bg-[#1D1D1A] min-h-screen text-white">
            <Header />

            <main>
                <section className="hero pt-24 pb-12 md:pt-32 md:pb-24">
                    <div className="container mx-auto px-4 text-center">
                        <Image src="/RTI-logo-rondel-2022_full_Color-vEhvQgMzDmsWqLSnbhVT2LAJ6GKhF1.png" alt="Round Table International Logo" width={150} height={150} className="mx-auto mb-8" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FBAF33]">Europe One 2027</h1>
                        <p className="text-xl md:text-2xl mb-8">Celebrating 100 Years of Round Table</p>
                        <p className="text-lg md:text-xl mb-12">June 15-18, 2027 • Norwich, UK</p>
                        <Link href="#register" className="bg-[#FBAF33] text-[#000000] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors">
                            Register Now
                        </Link>
                    </div>
                </section>

                <section id="about" className="py-12 md:py-24 bg-[#000000]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#FBAF33]">About Europe One 2027</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="mb-4">
                                    Europe One 2027 is a landmark event celebrating the centenary of the Round Table organization. Hosted in the historic city of Norwich, this gathering brings
                                    together members from across Europe to reflect on our rich history and chart our course for the future.
                                </p>
                                <p>Join us for four days of inspiring talks, workshops, and networking opportunities as we honor our past and embrace the challenges of tomorrow.</p>
                            </div>
                            <div className="bg-[#1D1D1A] p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-[#FBAF33]">Event Highlights</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Centenary celebration of Round Table</li>
                                    <li>Keynote speeches from world-renowned leaders</li>
                                    <li>Interactive workshops on leadership and community service</li>
                                    <li>Gala dinner in Norwich Castle</li>
                                    <li>Cultural excursions showcasing Norwich&apos;s heritage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="program" className="py-12 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#FBAF33]">Program Overview</h2>
                        <p className="text-center text-xl mb-8">June 15-18, 2027 • £400 per person</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((day, index) => (
                                <div key={index} className="bg-[#000000] p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-[#FBAF33]">{day}</h3>
                                    <ul className="space-y-2">
                                        <li>09:00 - Opening Ceremony</li>
                                        <li>10:30 - Keynote Speech</li>
                                        <li>12:00 - Lunch Break</li>
                                        <li>14:00 - Workshops</li>
                                        <li>16:30 - Panel Discussion</li>
                                        <li>19:00 - Evening Event</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="pre-tour" className="py-12 md:py-24 bg-[#000000]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#FBAF33]">Pre-Tour Experience</h2>
                        <p className="text-center mb-4 max-w-2xl mx-auto">
                            Join us for an exclusive 3-day pre-tour of Norwich, immersing yourself in the rich history and vibrant culture of this beautiful city before the main event begins.
                        </p>
                        <p className="text-center text-xl mb-12">£500 per person</p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#1D1D1A] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-[#FBAF33]">Day 1: Historical Norwich</h3>
                                <ul className="space-y-2">
                                    <li>Morning: Guided tour of Norwich Cathedral</li>
                                    <li>Afternoon: Visit to Norwich Castle Museum & Art Gallery</li>
                                    <li>Evening: Welcome dinner at Strangers&apos; Hall</li>
                                </ul>
                            </div>
                            <div className="bg-[#1D1D1A] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-[#FBAF33]">Day 2: Cultural Exploration</h3>
                                <ul className="space-y-2">
                                    <li>Morning: Tour of the historic Elm Hill and Norwich Lanes</li>
                                    <li>Afternoon: Visit to the award-winning Forum and Millennium Library</li>
                                    <li>Evening: Theatre performance at Norwich Theatre Royal</li>
                                </ul>
                            </div>
                            <div className="bg-[#1D1D1A] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-[#FBAF33]">Day 3: Norwich&apos;s Natural Beauty</h3>
                                <ul className="space-y-2">
                                    <li>Morning: Boat tour on the Norfolk Broads</li>
                                    <li>Afternoon: Visit to Plantation Garden and Norwich Market</li>
                                    <li>Evening: Farewell dinner at Benedicts Restaurant</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="register" className="py-12 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FBAF33]">Join Us in Norwich</h2>
                        <p className="text-xl mb-8">Be part of this historic event. Register now to secure your place at Europe One 2027 and the exclusive pre-tour experience.</p>
                        <Link href="#" className="bg-[#FBAF33] text-[#000000] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFFFFF] transition-colors inline-flex items-center">
                            Register Now <ChevronRight className="ml-2" />
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-[#000000] py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0 flex items-center space-x-2">
                            <Image src="/RTI-logo-rondel-2022_full_Color-vEhvQgMzDmsWqLSnbhVT2LAJ6GKhF1.png" alt="Round Table International Logo" width={40} height={40} />
                            <div>
                                <h3 className="text-xl font-semibold text-[#FBAF33]">Europe One 2027</h3>
                                <p>Norwich, UK • June 15-18, 2027</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                                <Facebook size={24} />
                            </Link>
                            <Link href="#" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                                <Twitter size={24} />
                            </Link>
                            <Link href="#" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="#" className="text-[#FBAF33] hover:text-[#FFFFFF] transition-colors">
                                <Linkedin size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        <p>&copy; 2024 Europe One 2027. All rights reserved.</p>
                        <p>Celebrating 100 Years of Round Table</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
