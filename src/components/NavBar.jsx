
export default function NavBar(){
    return <div className="flex justify-between items-center p-5 border-b-2 border-gray-200 shadow-md">
        <div className= "text-2xl font-bold tracking-wider hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer hover:scale-105">
            FarmYadri
        </div>
        <div className="flex items-center space-x-6">
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                Home
            </div>
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                About Us
            </div>
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                Gallery
            </div>
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                Wellness Program
            </div>
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                Accomodation
            </div>
            <div className="hover:text-slate-950 transition-all duration-300 text-slate-700 cursor-pointer">
                Contact Us
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all duration-300">
                Book Now
            </button>
        </div>
    </div>
}
