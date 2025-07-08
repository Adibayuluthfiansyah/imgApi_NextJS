'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const [isFocused, setIsFocused] = useState(false)

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const keyword = searchRef.current?.value?.trim()
        if (keyword) {
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
            <div className={`relative group transition-all duration-300 ${
                isFocused ? 'scale-105' : 'scale-100'
            }`}>
                {/* Search Container */}
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    isFocused 
                        ? 'border-gray-400 bg-white/20 shadow-lg shadow-purple-500/25' 
                        : 'border-white/20 hover:border-white/40'
                }`}>
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                        <MagnifyingGlass 
                            size={20} 
                            className={`transition-colors duration-300 ${
                                isFocused ? 'text-gray-500' : 'text-gray-300'
                            }`}
                        />
                    </div>
                    
                    {/* Input Field */}
                    <input 
                        ref={searchRef}
                        type="text"
                        placeholder="Search for free photos..."
                        className="w-full py-3 pl-12 pr-16 bg-transparent text-white placeholder-gray-500 rounded-2xl outline-none focus:placeholder-gray-400 transition-all duration-300"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    
                    {/* Search Button */}
                    <button 
                        type="submit"
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl transition-all duration-300 ${
                            isFocused 
                                ? 'bg-black hover:bg-gray-500 text-white shadow-lg cursor-pointer' 
                                : 'bg-white/20 hover:bg-white/30 text-gray-300 hover:text-white'
                        }`}
                    >
                        <MagnifyingGlass size={20} />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InputSearch