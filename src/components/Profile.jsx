import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-5">
      <div className="w-full max-w-sm space-y-4 bg-white border border-gray-300  ">
        <h2 className="text-xl font-semibold text-gray-900 px-5 pt-5">Account Settings</h2> 
       
        <div className='bg-gray-100 p-5 pb-100 '>
        <div className="flex items-center space-x-4 ">
          <div className="relative">
            <img
              src="img.jpg"
              alt="User"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] text-white text-xs rounded-full p-1">
              📷
            </div>
          </div>
          <div>
            <p className="text-lg font-medium">{user.name || 'Marry Doe'}</p>
            <p className="text-sm text-gray-500">{user.email || 'marry@email.com'}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      </div>
    </div>
  );
};

export default Profile;