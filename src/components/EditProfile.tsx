import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '../assets/icons/edit.svg';
import { ProfileData } from '../interfaces/ProfileData'; // Assuming you import this from where it's defined
import { useAlert } from '../services/AlertService';
import { RootState } from '../store';
import { setProfile } from '../store/profileSlice';
import './EditProfile.scss';

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const profileDataFromStore = useSelector((state: RootState) => state.profile);
  const { showAlert } = useAlert();

  const [profileData, setProfileData] =
    useState<ProfileData>(profileDataFromStore);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profilePicturePreview, setProfilePicturePreview] = useState<
    string | null
  >(null);

  useEffect(() => {
    setProfileData(profileDataFromStore);
  }, [profileDataFromStore]);

  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!profileData.name.trim()) validationErrors.name = 'Name is required';
    if (!profileData.username.trim())
      validationErrors.username = 'Username is required';
    if (!emailRegex.test(profileData.email))
      validationErrors.email = 'Enter a valid email address';
    if (profileData.password.length < 6)
      validationErrors.password = 'Password must be at least 6 characters';
    if (!profileData.dateOfBirth)
      validationErrors.dateOfBirth = 'Date of birth is required';
    if (!profileData.presentAddress.trim())
      validationErrors.presentAddress = 'Present address is required';
    if (!profileData.permanentAddress.trim())
      validationErrors.permanentAddress = 'Permanent address is required';
    if (!profileData.city.trim()) validationErrors.city = 'City is required';
    if (!profileData.postalCode.trim())
      validationErrors.postalCode = 'Postal code is required';
    if (!profileData.country.trim())
      validationErrors.country = 'Country is required';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSaving(true);
    try {
      dispatch(setProfile(profileData));

      // In real world, we'd make a request to save it in a backend
      // const response = await fetch('/api/profile/update', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(profileData),
      // });
      // const result = await response.json();

      showAlert('Profile saved successfully!', 'success');
    } catch (error) {
      showAlert('Failed to save profile.', 'error');
      console.error('Failed to update profile', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setProfileData((prev) => ({ ...prev, profilePicture: file }));
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center items-center h-full">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="edit-profile py-6 px-4">
      <div className="container flex" aria-label="Edit profile form">
        <div className="avatar">
          <div className="relative">
            <img
              className="rounded-full person-img"
              onClick={() =>
                document.getElementById('profilePictureInput')?.click()
              }
              src={
                profilePicturePreview ||
                (profileData.profilePicture
                  ? URL.createObjectURL(profileData.profilePicture)
                  : 'https://i.pravatar.cc/100?img=7')
              }
              alt="Avatar"
              aria-label="Profile picture"
            />
            <button
              type="button"
              onClick={() =>
                document.getElementById('profilePictureInput')?.click()
              }
              className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2"
              aria-label="Edit profile picture"
            >
              <img src={EditIcon} alt="Edit icon" />
              <span className="sr-only">Edit profile picture</span>
            </button>
          </div>
        </div>
        <form
          className="form-group-container flex-1"
          onSubmit={handleSubmit}
          aria-label="Edit profile form"
        >
          {[
            {
              id: 'name',
              label: 'Your Name',
              type: 'text',
              value: profileData.name,
            },
            {
              id: 'username',
              label: 'Username',
              type: 'text',
              value: profileData.username,
            },
            {
              id: 'email',
              label: 'Email',
              type: 'email',
              value: profileData.email,
            },
            {
              id: 'password',
              label: 'Password',
              type: 'password',
              value: profileData.password,
            },
            {
              id: 'dateOfBirth',
              label: 'Date of Birth',
              type: 'date',
              value: profileData.dateOfBirth,
            },
            {
              id: 'presentAddress',
              label: 'Present Address',
              type: 'text',
              value: profileData.presentAddress,
            },
            {
              id: 'permanentAddress',
              label: 'Permanent Address',
              type: 'text',
              value: profileData.permanentAddress,
            },
            {
              id: 'city',
              label: 'City',
              type: 'text',
              value: profileData.city,
            },
            {
              id: 'postalCode',
              label: 'Postal Code',
              type: 'text',
              value: profileData.postalCode,
            },
            {
              id: 'country',
              label: 'Country',
              type: 'text',
              value: profileData.country,
            },
          ].map((field) => (
            <div className="form-group" key={field.id}>
              <label htmlFor={field.id} className="text-lg mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.id}
                id={field.id}
                value={field.id === 'profilePicture' ? '' : field.value}
                onChange={handleChange}
                className="form-control block w-full p-2 border rounded-2xl"
                required
              />
              {errors[field.id] && (
                <p className="text-red-500">{errors[field.id]}</p>
              )}
            </div>
          ))}

          <div className="form-group">
            <input
              type="file"
              id="profilePictureInput"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="save-button text-white text-lg focus:outline-none focus:ring-4 rounded-2xl py-2.5"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
