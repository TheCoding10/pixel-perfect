import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth } from '../hooks/useAuth';

export function SettingsPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  if (!isAuthenticated || !user) {
    navigate('/');
    return null;
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Profile updated successfully (mock)');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header username={user.username} email={user.email} />

      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        {successMessage && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-600">
            {successMessage}
          </div>
        )}

        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
          
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleProfileChange}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleProfileChange}
                className="mt-2"
              />
            </div>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Update Profile
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
