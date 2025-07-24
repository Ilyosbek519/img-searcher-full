import React, { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((store) => store.user);

  const [image, setImage] = useState(null);

  if (!user) {
    return <p className="text-center text-xl mt-10">Foydalanuvchi topilmadi!</p>;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={
            image ||
            "../public/images/avatar-generations_hugw.jpg"
          }
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm"
        />

        <div className="mt-4 text-left w-full">
          <p><strong>Ism:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
