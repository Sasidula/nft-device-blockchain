import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom';
export const RegisterHeader = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        console.log('Back button clicked')
        navigate(-1);
    }
    const handleRegister = () => {
        console.log('Login button clicked')
        navigate('/login');
    }
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
            <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back"
            >
                <ArrowLeft size={24} />
            </button>
            <Button onClick={handleRegister} variant="subtle" color="blue">
                Login
            </Button>
        </header>
    )
}