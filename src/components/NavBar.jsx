

export default function NavBar(){
    return <div className="flex justify-between items-center p-5 border-b-2 border-gray-200 shadow-md">
        <div className="text-2xl font-bold tracking-wider hover:text-slate-900 transition-all duration-300 text-slate-700">
            FarmYadri
        </div>
        <div className = "grid grid-cols-7 gap-4">
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                Home
            </div>
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                About Us
            </div>
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                Gallery
            </div>
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                Wellness Program
            </div>
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                Accomodation
            </div>
            <div className="hover:text-slate-900 transition-all duration-300 text-slate-700">
                Contact Us
            </div>
        </div>
    </div>
}