import { useState } from 'react';
import { userService, User } from '../services/userService';
import { Database, AlertCircle, CheckCircle2, Info, Loader } from 'lucide-react';

export function DatabaseTest() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  const handleLoadAllUsers = async () => {
    setLoading(true);
    try {
      const allUsers = await userService.getAllUsers();
      setUsers(allUsers);
      setMessage(`✓ Loaded ${allUsers.length} user(s) from database`);
      setMessageType('success');
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Failed to load users'}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleClearUsers = () => {
    setUsers([]);
    setMessage('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Database size={32} className="text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">View Database</h1>
      </div>

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

      <div className="flex gap-3 mb-6">
        <button
          onClick={handleLoadAllUsers}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Loading...
            </>
          ) : (
            'Load All Users'
          )}
        </button>
        <button
          onClick={handleClearUsers}
          className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Clear View
        </button>
      </div>

      {users.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Database size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg mb-4">No users loaded yet</p>
          <div className="text-left bg-white p-4 rounded-lg border border-gray-200 max-w-md mx-auto">
            <p className="font-semibold text-gray-700 mb-2">How to verify database:</p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Go to "Register User" page</li>
              <li>Fill in and submit the form</li>
              <li>Return to this page</li>
              <li>Click "Load All Users"</li>
              <li>See your registered user in the table</li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <p className="text-gray-600 font-semibold mb-4">Total Users: {users.length}</p>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">IC</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Blood Type</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Phone</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Allergies</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-3 text-gray-800">{user.name}</td>
                  <td className="px-4 py-3 text-gray-800 font-mono text-sm">{user.ic}</td>
                  <td className="px-4 py-3 text-gray-800"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">{user.bloodType}</span></td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{user.email || '-'}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{user.phone || '-'}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    {user.allergies && user.allergies.length > 0 
                      ? user.allergies.join(', ')
                      : '-'}
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    {user.createdAt 
                      ? new Date(user.createdAt).toLocaleDateString()
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
