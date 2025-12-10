import { useState } from 'react';
import { userService, User } from '../services/userService';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState<User>({
    name: '',
    ic: '',
    bloodType: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    allergies: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [registeredUser, setRegisteredUser] = useState<User | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.ic || !formData.bloodType) {
      setMessage('Please fill in all required fields (Name, IC, Blood Type)');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      // Parse allergies as array
      const userData = {
        ...formData,
        allergies: formData.allergies 
          ? (typeof formData.allergies === 'string' 
              ? formData.allergies.split(',').map(a => a.trim()).filter(a => a)
              : formData.allergies)
          : [],
      };

      const result = await userService.createUser(userData);
      setMessage('✓ User registered successfully!');
      setMessageType('success');
      setRegisteredUser(result);
      
      // Reset form
      setFormData({
        name: '',
        ic: '',
        bloodType: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: '',
        allergies: [],
      });
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Failed to register user'}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleRetrieveUser = async () => {
    if (!formData.ic) {
      setMessage('Please enter an IC number to retrieve user');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      const user = await userService.getUserByIC(formData.ic);
      setMessage(`✓ User found!`);
      setMessageType('success');
      setRegisteredUser(user);
    } catch (error) {
      setMessage(`User not found with IC: ${formData.ic}`);
      setMessageType('error');
      setRegisteredUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Register User</h1>

      {message && (
        <div className={`flex items-center gap-3 p-4 rounded-lg mb-6 ${
          messageType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
          messageType === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
          'bg-blue-50 text-blue-800 border border-blue-200'
        }`}>
          {messageType === 'success' ? <CheckCircle2 size={20} /> :
           messageType === 'error' ? <AlertCircle size={20} /> :
           <Info size={20} />}
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              IC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ic"
              value={formData.ic}
              onChange={handleChange}
              placeholder="e.g., 900101-01-1234"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Type <span className="text-red-500">*</span>
            </label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select blood type</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Allergies (comma-separated)
          </label>
          <textarea
            name="allergies"
            value={typeof formData.allergies === 'string' ? formData.allergies : (formData.allergies as any)?.join(', ') || ''}
            onChange={handleChange}
            placeholder="e.g., Penicillin, Peanuts"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Registering...' : 'Register User'}
        </button>
      </form>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Retrieve User</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter IC number to retrieve"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setFormData({ ...formData, ic: (e.target as HTMLInputElement).value });
                handleRetrieveUser();
              }
            }}
          />
          <button
            onClick={handleRetrieveUser}
            disabled={loading}
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </div>

      {registeredUser && (
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Registered User Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-lg font-semibold text-gray-800">{registeredUser.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">IC</p>
              <p className="text-lg font-semibold text-gray-800">{registeredUser.ic}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Blood Type</p>
              <p className="text-lg font-semibold text-gray-800">{registeredUser.bloodType}</p>
            </div>
            {registeredUser.gender && (
              <div>
                <p className="text-sm text-gray-600">Gender</p>
                <p className="text-lg font-semibold text-gray-800">{registeredUser.gender}</p>
              </div>
            )}
            {registeredUser.phone && (
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-lg font-semibold text-gray-800">{registeredUser.phone}</p>
              </div>
            )}
            {registeredUser.email && (
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-lg font-semibold text-gray-800">{registeredUser.email}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
