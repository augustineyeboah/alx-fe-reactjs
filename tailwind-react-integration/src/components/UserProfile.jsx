function UserProfile() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center mb-2">
        John Doe
      </h2>
      <p className="text-gray-600 text-center">
        Frontend Developer
      </p>
    </div>
  );
}

export default UserProfile;
