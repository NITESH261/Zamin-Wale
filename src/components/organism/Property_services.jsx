import React from 'react'

const Property_services = () => {
    return (
        <div className="p-8 w-full">
            <h1 className="text-2xl font-bold mb-4">Property Services</h1>
            <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border rounded-lg overflow-hidden shadow-sm">
                    <img src="assets/house/house1.webp" alt="Hands holding a small house and a piggy bank" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Best Home Loan Deals</h2>
                        <p className="text-gray-600">Compare & choose from 34+ banks to get the best home loan deal</p>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-sm">
                    <img src="assets/house/house1.webp" alt="A well-decorated living room with a sofa and coffee table" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Home Interiors</h2>
                        <p className="text-gray-600">Transform your space with our trusted Decor partners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property_services
