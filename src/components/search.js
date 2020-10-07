import React, {useState} from 'react'

export default function Search({}) {
    const [inputValue, setInputValue] = useState('')
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    return (
            <ul className="inline flex items-center justify-end font-medium text-gray-300 text-base px-5">
                <li>
                    {
                        searchBarOpen ? (
                            <input
                                type="text"
                                placeholder="Search the item"
                                className="focus:outline-none text-white bg-blue-500 focus:shadow-outline border-b-2 border-gray-100 block w-full appearance-none leading-normal"
                                onChange ={e => setInputValue(e.target.value)} />
                        ) : null
                    }

                </li>
                <li onClick={() => setSearchBarOpen(!searchBarOpen)}>
                    <svg width="24" height="24">
                        <path d="M10 18C11.8411 18 13.537 17.3781 14.889 16.3328L20.2631 21.7069C20.6536 22.0974 21.2868 22.0974 21.6773 21.7069L21.7069 21.6773C22.0974 21.2868 22.0974 20.6536 21.7069 20.2631L16.3328 14.889C17.3781 13.537 18 11.8411 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM16.7995 9.99947C16.7995 13.755 13.755 16.7995 9.99947 16.7995C6.24393 16.7995 3.19947 13.755 3.19947 9.99947C3.19947 6.24393 6.24393 3.19947 9.99947 3.19947C13.755 3.19947 16.7995 6.24393 16.7995 9.99947Z" fill="#ffffff" />
                    </svg>
                </li>
            </ul>
    )
}